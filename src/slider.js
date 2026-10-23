import { initDiv } from "./div.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "./utility.js";

import sliderStyleSheet from './slider.css' with { type: 'css' };

adoptStyleSheet(sliderStyleSheet);

const VERTICAL_CLASS = 'slider-vertical';
const ACTIVE_CLASS = 'slider-active';
const DRAGGING_CLASS = 'slider-dragging';
const VALUE_LABELS = ['off', 'auto', 'on'];
const ORIENTATIONS = ['horizontal', 'vertical'];
const TRACK_MODES = ['normal', 'inverted', false];
const EPSILON = 1e-9;

//the number of decimals of a number, which is the precision of the values that are a multiple of it
const getDecimals = (number) => {
    const text = String(number);
    if (text.includes('e-')) {
        return parseInt(text.split('e-')[1], 10) + (text.split('e-')[0].split('.')[1]?.length ?? 0);
    }
    return text.split('.')[1]?.length ?? 0;
};

//creates an element with a class
const create = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

//defines the properties of a slider, which keeps its state in the closure, and returns the object with the state and what the events need
const defineSliderProperties = (element) => {
    const state = {
        values: [0],                //the values, inside the limits, rounded and sorted
        raw: [0],                   //the values that were set, which are applied again when the limits or the step change, until the user changes the values
        range: false,               //true if the value is an array
        min: 0,
        max: 100,
        step: 1,                    //null: the values are the ones of the marks
        marks: false,
        valueLabelDisplay: 'off',
        valueLabelFormat: (value) => String(value),
        scale: (value) => value,
        getAriaLabel: null,
        getAriaValueText: null,
        trackMode: 'normal',
        disabled: false,
        disableSwap: false,
        minDistance: 0,
        shiftStep: 10,
        name: ''
    };
    let thumbs = [];
    let fills = [];                 //the default visuals of the thumbs
    let visuals = [];               //the visuals that the thumbs have: the default ones, or the ones that the programmer set
    const customThumbs = { left: null, right: null };       //the visuals that the programmer set
    let trackFill = null;           //the default visual of the track
    let trackVisual = null;         //the visual that the track has
    let markElements = [];          //{ value, dot, label }
    let hiddenInputs = [];
    let rail = null;
    let trackElement = null;
    let activeIndex = -1;           //the thumb that is dragged
    let dragPointer = null;         //the id of the pointer that drags it
    let startValues = null;         //the values when the pointer went down, to know if the drag changed them

    const isVertical = () => element.classList.contains(VERTICAL_CLASS);
    const clamp = (value, low = state.min, high = state.max) => Math.min(Math.max(value, low), high);
    const percentOf = (value) => state.max > state.min ? (clamp(value) - state.min) / (state.max - state.min) * 100 : 0;

    //the values of the marks that the slider can have when it has no step
    const getMarkValues = () => (Array.isArray(state.marks) ? state.marks : []).map(mark => typeof mark === 'number' ? mark : mark.value)
        .filter(value => value >= state.min && value <= state.max).sort((a, b) => a - b);

    //rounds a value to the step, or to the nearest mark if there is no step; the value is inside of the limits
    const roundValue = (value) => {
        value = clamp(value);
        if (state.step === null) {
            const marks = getMarkValues();
            return marks.length === 0 ? value : marks.reduce((nearest, mark) => Math.abs(mark - value) < Math.abs(nearest - value) ? mark : nearest);
        }
        const decimals = Math.max(getDecimals(state.step), getDecimals(state.min));
        return clamp(Number((Math.round((value - state.min) / state.step) * state.step + state.min).toFixed(decimals)));
    };

    //returns the values after one of them is set to a value, and the index of the thumb that has it, or null if the values cannot be like that
    const setValueAt = (values, index, value) => {
        if (values.length === 1) {
            return { values: [value], index: 0 };
        }
        const output = values.slice();
        if (state.disableSwap) {
            value = clamp(value, index > 0 ? values[index - 1] + state.minDistance : state.min, index < values.length - 1 ? values[index + 1] - state.minDistance : state.max);
        }
        output[index] = value;
        let newIndex = index;
        if (!state.disableSwap) {
            output.sort((a, b) => a - b);
            newIndex = output.indexOf(value);
        }
        if (state.minDistance > 0 && output.some((other, position) => position > 0 && other - output[position - 1] < state.minDistance - EPSILON)) {
            return null;
        }
        return { values: output, index: newIndex };
    };

    //the value that a key gives to a thumb, or null if the key does nothing
    const getKeyValue = (key, shift, value) => {
        const stepValue = (direction, amount) => {
            if (state.step === null) {
                const marks = getMarkValues();
                const next = direction > 0 ? marks.find(mark => mark > value + EPSILON) : marks.findLast(mark => mark < value - EPSILON);
                return next ?? value;
            }
            return roundValue(value + direction * amount * state.step);
        };
        switch (key) {
            case 'ArrowRight':
            case 'ArrowUp':
                return stepValue(1, shift ? state.shiftStep : 1);
            case 'ArrowLeft':
            case 'ArrowDown':
                return stepValue(-1, shift ? state.shiftStep : 1);
            case 'PageUp':
                return stepValue(1, state.shiftStep);
            case 'PageDown':
                return stepValue(-1, state.shiftStep);
            case 'Home':
                return state.min;
            case 'End':
                return state.max;
        }
        return null;
    };

    //the marks, as objects { value, label }
    const getMarks = () => {
        if (state.marks === true) {
            if (state.step === null || !(state.step > 0)) {
                return [];
            }
            const count = Math.min(1000, Math.floor((state.max - state.min) / state.step + EPSILON));
            const decimals = Math.max(getDecimals(state.step), getDecimals(state.min));
            return Array.from({ length: count + 1 }, (_, index) => ({ value: Number((state.min + index * state.step).toFixed(decimals)) }));
        }
        if (Array.isArray(state.marks)) {
            return state.marks.map(mark => typeof mark === 'number' ? { value: mark } : { value: mark.value, label: mark.label })
                .filter(mark => mark.value >= state.min && mark.value <= state.max);
        }
        return [];
    };

    //the text of a thumb: the label of the value
    const getValueText = (index) => String(state.valueLabelFormat(state.scale(state.values[index]), index));

    //puts something at a position along the rail: left (or bottom) in percent
    const place = (item, percent) => {
        const vertical = isVertical();
        item.style.left = vertical ? '' : percent + '%';
        item.style.bottom = vertical ? percent + '%' : '';
    };

    //the marks that are in the track
    const isMarkActive = (value) => {
        if (state.trackMode === false) {
            return false;
        }
        const first = state.values[0];
        const last = state.values[state.values.length - 1];
        if (state.trackMode === 'inverted') {
            return state.range ? value <= first || value >= last : value >= first;
        }
        return state.range ? value >= first && value <= last : value <= first;
    };

    //updates the positions, the aria attributes and the texts from the values
    const update = () => {
        if (!trackElement) {
            return;
        }
        const vertical = isVertical();
        const percents = state.values.map(percentOf);
        const first = state.range ? percents[0] : 0;
        const last = percents[percents.length - 1];
        trackElement.style.left = vertical ? '' : first + '%';
        trackElement.style.width = vertical ? '' : (last - first) + '%';
        trackElement.style.bottom = vertical ? first + '%' : '';
        trackElement.style.height = vertical ? (last - first) + '%' : '';

        thumbs.forEach((thumb, index) => {
            place(thumb, percents[index]);
            const value = state.values[index];
            const scaled = state.scale(value);
            const ariaLabel = state.getAriaLabel?.(index);
            thumb.setAttribute('aria-valuemin', state.scale(state.min));
            thumb.setAttribute('aria-valuemax', state.scale(state.max));
            thumb.setAttribute('aria-valuenow', scaled);
            thumb.setAttribute('aria-valuetext', state.getAriaValueText ? state.getAriaValueText(scaled, index) : getValueText(index));
            thumb.setAttribute('aria-orientation', vertical ? 'vertical' : 'horizontal');
            thumb.setAttribute('aria-disabled', String(state.disabled));
            thumb.tabIndex = state.disabled ? -1 : 0;
            if (ariaLabel) {
                thumb.setAttribute('aria-label', ariaLabel);
            }
            else {
                thumb.removeAttribute('aria-label');
            }
            thumb.firstChild.textContent = getValueText(index);
        });
        hiddenInputs.forEach((input, index) => { input.value = state.values[index]; });

        for (const mark of markElements) {
            const active = isMarkActive(mark.value);
            mark.dot.classList.toggle('slider-mark-active', active);
            mark.label?.classList.toggle('slider-markLabel-active', active);
            place(mark.dot, percentOf(mark.value));
            if (mark.label) {
                place(mark.label, percentOf(mark.value));
            }
        }
    };

    //creates the elements of the marks
    const renderMarks = () => {
        for (const mark of markElements) {
            mark.dot.remove();
            mark.label?.remove();
        }
        markElements = getMarks().map(mark => {
            const dot = create('span', 'slider-mark');
            dot.setAttribute('aria-hidden', 'true');
            element.insertBefore(dot, thumbs[0] ?? null);
            let label = null;
            if (mark.label !== undefined && mark.label !== null) {
                label = create('span', 'slider-markLabel');
                label.setAttribute('aria-hidden', 'true');
                label.textContent = mark.label;
                element.insertBefore(label, thumbs[0] ?? null);
            }
            return { value: mark.value, dot, label };
        });
        element.classList.toggle('slider-marked', markElements.some(mark => mark.label));
    };

    //the role of a thumb: 'left' is the first one, 'right' is the last one of a range slider, and the ones between have none
    const getThumbRole = (index) => index === 0 ? 'left' : (index === thumbs.length - 1 ? 'right' : null);

    //puts in a thumb the visual that the programmer set for its role, or the default one
    const showThumbVisual = (index) => {
        const visual = customThumbs[getThumbRole(index)] ?? fills[index];
        if (visuals[index] !== visual) {
            visuals[index].replaceWith(visual);
            visuals[index] = visual;
        }
    };

    //creates the thumbs, and the inputs of the name, for the number of values
    const renderThumbs = () => {
        thumbs.forEach(thumb => thumb.remove());
        fills = [];
        visuals = [];
        thumbs = state.values.map(() => {
            const thumb = create('span', 'slider-thumb');
            thumb.setAttribute('role', 'slider');
            const fill = create('span', 'slider-thumbFill');
            thumb.append(create('span', 'slider-valueLabel'), fill);
            fills.push(fill);
            visuals.push(fill);
            element.append(thumb);
            return thumb;
        });
        thumbs.forEach((_, index) => showThumbVisual(index));
        renderNames();
    };

    //creates the hidden inputs that send the values with a form
    const renderNames = () => {
        hiddenInputs.forEach(input => input.remove());
        hiddenInputs = state.name ? state.values.map(() => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = state.name;
            element.append(input);
            return input;
        }) : [];
    };

    //sets the values: they are inside the limits, sorted, and rounded; the thumbs are created if the number of values changed
    const setValues = (values, range) => {
        state.raw = values.slice();
        state.range = range;
        state.values = values.map(value => roundValue(value)).sort((a, b) => a - b);
        if (thumbs.length !== state.values.length) {
            renderThumbs();
        }
        update();
    };

    //dispatches the events, as an input does: 'input' for every change, 'change' when the user is done
    const fireInput = () => element.dispatchEvent(new Event('input', { bubbles: true }));
    const fireChange = () => element.dispatchEvent(new Event('change', { bubbles: true }));

    //changes the value of a thumb because of the user; returns the index that the thumb has after it, and fires 'input' if the values changed
    const moveThumb = (index, value) => {
        const result = setValueAt(state.values, index, roundValue(value));
        if (!result) {
            return index;
        }
        const changed = result.values.some((other, position) => other !== state.values[position]);
        state.values = result.values;
        state.raw = result.values.slice();
        if (result.index !== index && activeIndex === index) {
            thumbs[index].classList.remove(ACTIVE_CLASS);
            thumbs[result.index].classList.add(ACTIVE_CLASS);
            thumbs[result.index].focus({ preventScroll: true });
        }
        update();
        if (changed) {
            fireInput();
        }
        return result.index;
    };

    //the value that is under the pointer
    const getPointerValue = (event) => {
        const rect = element.getBoundingClientRect();
        const ratio = isVertical() ? (rect.bottom - event.clientY) / rect.height : (event.clientX - rect.left) / rect.width;
        return roundValue(state.min + Math.min(Math.max(ratio, 0), 1) * (state.max - state.min));
    };

    //the thumb that is closest to a value
    const getClosestThumb = (value) => {
        let closest = 0;
        state.values.forEach((other, index) => {
            if (Math.abs(other - value) < Math.abs(state.values[closest] - value) ||
                (Math.abs(other - value) === Math.abs(state.values[closest] - value) && value > other)) {
                closest = index;
            }
        });
        return closest;
    };

    //the pointer: pressing on the rail or on a thumb moves the closest thumb there; dragging goes on while the pointer is down
    element.addEventListener('pointerdown', (event) => {
        if (state.disabled || (event.pointerType === 'mouse' && event.button !== 0)) {
            return;
        }
        event.preventDefault();
        const pressed = thumbs.indexOf(event.target.closest?.('.slider-thumb'));
        const value = getPointerValue(event);
        startValues = state.values.slice();
        activeIndex = pressed >= 0 ? pressed : getClosestThumb(value);
        dragPointer = event.pointerId;
        try {
            element.setPointerCapture(event.pointerId);        //the moves and the release out of the slider come to it
        }
        catch (error) {
            //the pointer cannot be captured: the slider only gets the events that happen over it
        }
        element.classList.add(DRAGGING_CLASS);
        thumbs[activeIndex].classList.add(ACTIVE_CLASS);
        thumbs[activeIndex].focus({ preventScroll: true });
        activeIndex = moveThumb(activeIndex, value);
    });

    element.addEventListener('pointermove', (event) => {
        if (activeIndex >= 0 && event.pointerId === dragPointer) {
            activeIndex = moveThumb(activeIndex, getPointerValue(event));
        }
    });

    const endDrag = (event) => {
        if (activeIndex < 0 || event.pointerId !== dragPointer) {
            return;
        }
        thumbs.forEach(thumb => thumb.classList.remove(ACTIVE_CLASS));
        element.classList.remove(DRAGGING_CLASS);
        activeIndex = -1;
        dragPointer = null;
        if (element.hasPointerCapture(event.pointerId)) {
            element.releasePointerCapture(event.pointerId);
        }
        if (startValues && state.values.some((value, index) => value !== startValues[index])) {
            fireChange();
        }
        startValues = null;
    };
    element.addEventListener('pointerup', endDrag);
    element.addEventListener('pointercancel', endDrag);

    //the keyboard: on the thumb that has the focus
    element.addEventListener('keydown', (event) => {
        const index = thumbs.indexOf(event.target);
        if (state.disabled || index < 0 || event.ctrlKey || event.metaKey || event.altKey) {
            return;
        }
        const value = getKeyValue(event.key, event.shiftKey, state.values[index]);
        if (value === null) {
            return;
        }
        event.preventDefault();
        const before = state.values.slice();
        const newIndex = moveThumb(index, value);
        if (newIndex !== index) {
            thumbs[newIndex].focus({ preventScroll: true });
        }
        if (state.values.some((other, position) => other !== before[position])) {
            fireChange();
        }
    });

    const define = (name, get, set) => Object.defineProperty(element, name, { configurable: true, enumerable: true, get, set });

    //the value is set again when the limits and the step are set after it: { value: 150, max: 200 } is 150
    define('value', () => state.range ? state.values.slice() : state.values[0], (value) => {
        const range = Array.isArray(value);
        const values = (range ? value : [value]).map(Number);
        console.assert(values.length > 0 && values.every(Number.isFinite));
        setValues(values, range);
    });

    define('min', () => state.min, (value) => {
        console.assert(Number.isFinite(value) && value < state.max);
        state.min = value;
        setValues(state.raw, state.range);
        renderMarks();
        update();
    });

    define('max', () => state.max, (value) => {
        console.assert(Number.isFinite(value) && value > state.min);
        state.max = value;
        setValues(state.raw, state.range);
        renderMarks();
        update();
    });

    define('step', () => state.step, (value) => {
        console.assert(value === null || (Number.isFinite(value) && value > 0));
        state.step = value;
        setValues(state.raw, state.range);
        renderMarks();
        update();
    });

    define('marks', () => state.marks, (value) => {
        console.assert(value === true || value === false || value === null || value === undefined || Array.isArray(value));
        state.marks = value || false;
        renderMarks();
        update();
    });

    define('valueLabelDisplay', () => state.valueLabelDisplay, (value) => {
        console.assert(VALUE_LABELS.includes(value));
        state.valueLabelDisplay = value;
        for (const name of VALUE_LABELS) {
            element.classList.toggle(`slider-valueLabel-${name}`, name === value && value !== 'off');
        }
        element.classList.toggle('slider-hasValueLabel', value !== 'off');
    });

    define('valueLabelFormat', () => state.valueLabelFormat, (value) => {
        console.assert(typeof value === 'function');
        state.valueLabelFormat = value;
        update();
    });

    define('scale', () => state.scale, (value) => {
        console.assert(typeof value === 'function');
        state.scale = value;
        update();
    });

    define('getAriaLabel', () => state.getAriaLabel, (value) => {
        state.getAriaLabel = value ?? null;
        update();
    });

    define('getAriaValueText', () => state.getAriaValueText, (value) => {
        state.getAriaValueText = value ?? null;
        update();
    });

    define('orientation', () => isVertical() ? 'vertical' : 'horizontal', (value) => {
        console.assert(ORIENTATIONS.includes(value));
        element.classList.toggle(VERTICAL_CLASS, value === 'vertical');
        update();
    });

    define('trackMode', () => state.trackMode, (value) => {
        console.assert(TRACK_MODES.includes(value));
        state.trackMode = value;
        element.classList.toggle('slider-track-inverted', value === 'inverted');
        element.classList.toggle('slider-track-none', value === false);
        update();
    });

    define('disabled', () => state.disabled, (value) => {
        state.disabled = !!value;
        element.classList.toggle('slider-disabled', state.disabled);
        if (state.disabled) {
            thumbs.forEach(thumb => thumb.classList.remove(ACTIVE_CLASS));
        }
        update();
    });

    define('disableSwap', () => state.disableSwap, (value) => { state.disableSwap = !!value; });

    define('minDistance', () => state.minDistance, (value) => {
        console.assert(Number.isFinite(value) && value >= 0);
        state.minDistance = value;
    });

    define('shiftStep', () => state.shiftStep, (value) => {
        console.assert(Number.isFinite(value) && value > 0);
        state.shiftStep = value;
    });

    define('name', () => state.name, (value) => {
        state.name = value ? String(value) : '';
        renderNames();
        update();
    });

    //the visuals are set to an element, to a function that returns one, or to null (the default one)
    const getComponent = (value) => {
        const component = typeof value === 'function' ? value() : value ?? null;
        console.assert(component === null || component instanceof Element, 'The thumb and the track must be elements.');
        return component;
    };

    define('track', () => trackVisual, (value) => {
        const visual = getComponent(value) ?? trackFill;
        if (visual !== trackVisual) {
            trackVisual.replaceWith(visual);
            trackVisual = visual;
        }
    });

    //'thumb' is the 'leftThumb'; the 'rightThumb' is the one of the last value, if there are several
    const defineThumbProperty = (name, role) => define(name,
        () => role === 'right' && thumbs.length < 2 ? customThumbs.right : visuals[role === 'left' ? 0 : thumbs.length - 1],
        (value) => {
            customThumbs[role] = getComponent(value);
            thumbs.forEach((_, index) => showThumbVisual(index));
        });
    defineThumbProperty('thumb', 'left');
    defineThumbProperty('leftThumb', 'left');
    defineThumbProperty('rightThumb', 'right');

    //the elements of the slider that are always there
    rail = create('span', 'slider-rail');
    trackElement = create('span', 'slider-track');
    trackFill = create('span', 'slider-trackFill');
    trackVisual = trackFill;
    trackElement.append(trackFill);
    element.append(rail, trackElement);
    renderThumbs();
    update();

    return update;
};

/**
 * Initializes an instance of HTMLDivElement as a slider, with all the capabilities and the styles of MUI's Slider.
 *
 * It invokes the function `initDiv(element, ...properties)`.
 *
 * The element gets the class 'slider' by default; an `additionalClassName` property adds further classes (the color classes 'slider-secondary',
 * '-error', '-warning', '-info', '-success'). Its `errorClassName` defaults to 'slider-error', which gives it the error color. Its `busyClassName`
 * defaults to 'slider-busy'. The element gets the property `disabled` (and `enabled`).
 *
 * The slider has a rail, a track (the part that is selected), marks, and one thumb for each value. The thumbs are elements with the role 'slider',
 * that the keyboard can focus, and that have the attributes aria-valuemin, -valuemax, -valuenow, -valuetext, -orientation and -disabled.
 *
 * The element gets the property 'displaySize', which accepts 'small' (2px track, 12px thumb), 'medium' (the default; 4px, 20px) and 'large'
 * (6px, 28px; MUI has no large slider).
 *
 * The element gets the following properties:
 *  - `value`: a number, or an array of numbers for a range slider (a slider with several thumbs); the default is 0. It is inside the limits, rounded to the
 *    step, and sorted. Setting it does not dispatch events.
 *  - `min` and `max`: the limits; the defaults are 0 and 100.
 *  - `step`: the difference between the values; the default is 1. If it is null, the values are the ones of the marks (the marks must be an array).
 *  - `marks`: false (the default); true, for a mark at every step (up to 1000); or an array of numbers, or of objects `{ value, label }`, for the marks at
 *    those values, with the label below the mark (at its right, if the slider is vertical) if it has one.
 *  - `valueLabelDisplay`: 'off' (the default), 'auto' or 'on': a label with the value over the thumb (at its left, if the slider is vertical), always ('on') or while the
 *    mouse is over the thumb, the thumb has the focus or it is pressed ('auto'). `valueLabelFormat`: a function `(scaledValue, index)` that returns the text of the label.
 *  - `scale`: a function that is passed a value and returns the value that the labels and the aria attributes show (the value is, for example, an exponent, and the label
 *    shows the number); the default is the identity. The positions use the value.
 *  - `getAriaLabel`: a function `(index)` that returns the aria-label of a thumb. `getAriaValueText`: a function `(scaledValue, index)` that returns its aria-valuetext.
 *  - `orientation`: 'horizontal' (the default) or 'vertical', with the minimum at the bottom; the height of a vertical slider is 200px by default (set it with `style.height`).
 *  - `trackMode`: 'normal' (the default): the track is between the minimum and the thumb (or between the thumbs of a range slider); 'inverted': it is out of that;
 *    false: there is no track.
 *  - `track`: the visual of the track, the part that is selected. The default is the bar (a span with the class 'slider-trackFill'), in the color of the slider.
 *    It is set to an element, or to a function that returns one; null brings back the default one. The element fills the area of the track, whose
 *    position and length follow the values (and the mode), and has no style of its own: the programmer gives it its colors, border, radius, and so on.
 *    The getter returns the element that is in use.
 *  - `thumb`, `leftThumb`: the visual of the first thumb, the one at the left (at the bottom, if the slider is vertical). `thumb` and `leftThumb` are the same
 *    property. `rightThumb`: the visual of the last thumb of a range slider, which is the thumb on the right; it is shown when the slider has several values (it is
 *    kept until then), and the thumbs between the first and the last one have the default visual. The default visual is the circle (a span with the class
 *    'slider-thumbFill'), in the color of the slider, with a shadow. They are set as `track` is. The element is centered in the thumb, which is the focusable
 *    element, with the role 'slider', that has the position, the halo, the label of the value, and the area that the pointer hits (all of them
 *    as large as the 'displaySize' says); the element has the size, the colors and the shadow that the programmer gives it, and it can follow
 *    the state of the thumb with the css selectors `.slider-thumb:hover`, `.slider-thumb:focus-visible` and `.slider-thumb.slider-active` over it.
 *  - `disableSwap`: if true, the thumbs of a range slider cannot cross each other (by default, a thumb that is dragged past another one swaps with it).
 *  - `minDistance`: the least distance between the values of a range slider; the default is 0.
 *  - `shiftStep`: the number of steps that a key moves a thumb by when it is Page Up, Page Down, or an arrow with the shift key; the default is 10.
 *  - `name`: if it is not empty, the slider sends its values with a form, as hidden inputs of that name (one for each thumb).
 *
 * The user presses the rail to move the closest thumb there, and drags a thumb with the mouse, a finger, or a pen. The keyboard moves the thumb that has the focus: the
 * arrows by one step (Right and Up increase), Page Up and Page Down by `shiftStep` steps, Home and End to the limits.
 *
 * The events 'input' and 'change' are dispatched as in an input: 'input' for every change of the values by the user, while the thumb is dragged too, and 'change'
 * when the user is done: when the thumb is released, if the values are not what they were when it was pressed, or after a key.
 *
 * Margins: the halo of the thumb (8px, and 14px while it is pressed) is out of the slider, and the library hides the overflow of the elements, so the slider has
 * margins as large as what is out of it (at the ends of the rail, and across it), and room for the labels of the marks and of the value.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSlider = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    defineSliderProperties(element);
    defineDisplaySizeProperty(element, 'slider-small', 'slider-large');
    initDiv(element, { additionalClassName: 'slider', errorClassName: 'slider-error', busyClassName: 'slider-busy' }, ...properties);
}

/**
 * Creates a slider.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const slider = (...properties) => {
    const element = document.createElement('div');
    initSlider(element, ...properties);
    return element;
}
