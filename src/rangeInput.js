import { initInputBase } from "./inputBase.js";
import { whenInputPlaced } from "./input.js";
import { validateOnInput } from "./validateOnInput.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "./utility.js";

import rangeInputStyleSheet from './rangeInput.css' with { type: 'css' };

adoptStyleSheet(rangeInputStyleSheet);

const MARKS_CLASS = 'rangeInput-marks';
const MARK_CLASS = 'rangeInput-mark';
const MARK_ACTIVE_CLASS = 'rangeInput-mark-active';
const MARK_LABEL_CLASS = 'rangeInput-markLabel';
const MARK_LABEL_ACTIVE_CLASS = 'rangeInput-markLabel-active';
const VALUE_LABEL_CLASS = 'rangeInput-valueLabel';
const VALUE_LABELS = ['off', 'auto', 'on'];
const ORIENTATIONS = ['horizontal', 'vertical'];
const VERTICAL_CLASS = 'rangeInput-vertical';
const MAX_MARKS = 1000;                     //the most marks that `marks: true` makes

//the custom properties that the container needs from the input (colors and sizes), because the container is not inside the input
const COPIED_PROPERTIES = ['--rangeInput-main', '--rangeInput-thumb', '--rangeInput-track'];

const nativeValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
const nativeValueAsNumber = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'valueAsNumber');

//returns the minimum and the maximum of the input
const getLimits = (element) => ({ min: parseFloat(element.min || 0), max: parseFloat(element.max || 100) });

//returns where a value is between the minimum (0) and the maximum (1)
const getRatio = (element, value) => {
    const { min, max } = getLimits(element);
    return max > min ? Math.min(1, Math.max(0, (value - min) / (max - min))) : 0;
};

//returns the marks as objects { value, label }: the ones that the property 'marks' describes, inside the limits of the input
const getMarks = (element, marks) => {
    const { min, max } = getLimits(element);
    let list = [];
    if (marks === true) {
        const step = parseFloat(element.step);
        if (element.step !== 'any' && (step > 0 || element.step === '')) {
            const size = step > 0 ? step : 1;
            const count = Math.min(MAX_MARKS, Math.floor((max - min) / size + 1e-9));
            list = Array.from({ length: count + 1 }, (_, index) => ({ value: min + index * size }));
        }
    }
    else if (Array.isArray(marks)) {
        list = marks.map(mark => typeof mark === 'number' ? { value: mark } : { value: mark.value, label: mark.label });
    }
    return list.filter(mark => mark.value >= min && mark.value <= max);
};

//defines the properties 'marks', 'valueLabelDisplay' and 'valueLabelFormat', and keeps the fill of the track, the marks and the label of the
//value updated; returns the function that updates all of them
const defineSliderProperties = (element) => {
    const state = { marks: false, valueLabelDisplay: 'off', valueLabelFormat: (value) => String(value), container: null, marksLayer: null, valueLabel: null, markElements: [] };

    //the container has the marks and the label of the value; it is only needed if the slider has them
    const isContainerNeeded = () => state.marks !== false || state.valueLabelDisplay !== 'off';

    //puts the marks in the marks layer
    const renderMarks = () => {
        if (!state.marksLayer) {
            return;
        }
        state.marksLayer.replaceChildren();
        state.markElements = [];
        const marks = getMarks(element, state.marks);
        for (const mark of marks) {
            const ratio = getRatio(element, mark.value);
            const dot = document.createElement('span');
            dot.className = MARK_CLASS;
            dot.style.setProperty('--rangeInput-markRatio', ratio);
            state.marksLayer.append(dot);
            let label = null;
            if (mark.label !== undefined && mark.label !== null) {
                label = document.createElement('span');
                label.className = MARK_LABEL_CLASS;
                label.style.setProperty('--rangeInput-markRatio', ratio);
                label.textContent = mark.label;
                state.marksLayer.append(label);
            }
            state.markElements.push({ value: mark.value, dot, label });
        }
        state.container.classList.toggle('rangeInput-hasMarkLabels', marks.some(mark => mark.label !== undefined && mark.label !== null));
    };

    //updates the fill of the track, and, if there is a container, the marks that are filled, the label of the value, and the colors and sizes
    const refresh = () => {
        const value = parseFloat(nativeValue.get.call(element));
        const ratio = getRatio(element, value);
        element.style.setProperty('--rangeInput-fill', ratio * 100 + '%');
        if (!state.container) {
            return;
        }
        state.container.classList.toggle('rangeInput-container-vertical', element.classList.contains(VERTICAL_CLASS));
        const style = getComputedStyle(element);
        for (const name of COPIED_PROPERTIES) {
            state.container.style.setProperty(name, style.getPropertyValue(name));
        }
        state.container.style.setProperty('--rangeInput-ratio', ratio);
        for (const mark of state.markElements) {
            const active = mark.value <= value + 1e-9;
            mark.dot.classList.toggle(MARK_ACTIVE_CLASS, active);
            mark.dot.classList.toggle('rangeInput-mark-hidden', Math.abs(mark.value - value) < 1e-9);     //the thumb is over it
            mark.label?.classList.toggle(MARK_LABEL_ACTIVE_CLASS, active);
        }
        if (state.valueLabel) {
            state.valueLabel.textContent = String(state.valueLabelFormat(value));
        }
    };

    //creates, or removes, the container and its elements, as the properties need
    const setup = () => {
        if (!isContainerNeeded()) {
            state.marksLayer?.remove();
            state.valueLabel?.remove();
            state.marksLayer = state.valueLabel = null;
            state.markElements = [];
            state.container?.classList.remove('rangeInput-hasValueLabel', 'rangeInput-hasMarkLabels');
            return;
        }
        whenInputPlaced(element, (container) => {
            state.container = container;
            container.classList.add('rangeInput-container');
            if (!isContainerNeeded()) {
                return;
            }
            if (state.marks !== false && !state.marksLayer) {
                state.marksLayer = document.createElement('span');
                state.marksLayer.className = MARKS_CLASS;
                state.marksLayer.setAttribute('aria-hidden', 'true');
                container.append(state.marksLayer);
            }
            if (state.marks === false && state.marksLayer) {
                state.marksLayer.remove();
                state.marksLayer = null;
                state.markElements = [];
            }
            if (state.valueLabelDisplay !== 'off' && !state.valueLabel) {
                state.valueLabel = document.createElement('span');
                state.valueLabel.setAttribute('aria-hidden', 'true');
                container.append(state.valueLabel);
            }
            if (state.valueLabelDisplay === 'off' && state.valueLabel) {
                state.valueLabel.remove();
                state.valueLabel = null;
            }
            if (state.valueLabel) {
                state.valueLabel.className = `${VALUE_LABEL_CLASS} ${VALUE_LABEL_CLASS}-${state.valueLabelDisplay}`;
            }
            container.classList.toggle('rangeInput-hasValueLabel', state.valueLabelDisplay !== 'off');
            renderMarks();
            refresh();
        });
    };

    Object.defineProperty(element, 'marks', {
        configurable: true,
        enumerable: true,
        get: () => state.marks,
        set: (value) => {
            console.assert(value === true || value === false || value === null || value === undefined || Array.isArray(value));
            state.marks = value || false;
            setup();
            renderMarks();
            refresh();
        }
    });

    Object.defineProperty(element, 'valueLabelDisplay', {
        configurable: true,
        enumerable: true,
        get: () => state.valueLabelDisplay,
        set: (value) => {
            console.assert(VALUE_LABELS.includes(value));
            state.valueLabelDisplay = value;
            setup();
            refresh();
        }
    });

    Object.defineProperty(element, 'orientation', {
        configurable: true,
        enumerable: true,
        get: () => element.classList.contains(VERTICAL_CLASS) ? 'vertical' : 'horizontal',
        set: (value) => {
            console.assert(ORIENTATIONS.includes(value));
            element.classList.toggle(VERTICAL_CLASS, value === 'vertical');
            element.setAttribute('aria-orientation', value);
            refresh();
        }
    });

    Object.defineProperty(element, 'valueLabelFormat', {
        configurable: true,
        enumerable: true,
        get: () => state.valueLabelFormat,
        set: (value) => {
            console.assert(typeof value === 'function');
            state.valueLabelFormat = value;
            refresh();
        }
    });

    //the value, changed by the code, does not dispatch an event: the fill and the label are updated here
    Object.defineProperty(element, 'value', {
        configurable: true,
        enumerable: true,
        get: () => nativeValue.get.call(element),
        set: (value) => {
            nativeValue.set.call(element, value);
            refresh();
        }
    });
    Object.defineProperty(element, 'valueAsNumber', {
        configurable: true,
        enumerable: true,
        get: () => nativeValueAsNumber.get.call(element),
        set: (value) => {
            nativeValueAsNumber.set.call(element, value);
            refresh();
        }
    });
    for (const name of ['stepUp', 'stepDown']) {
        const method = HTMLInputElement.prototype[name];
        element[name] = (...args) => {
            method.apply(element, args);
            refresh();
        };
    }

    //the limits and the step, changed by the code or by the attributes, move the marks and change the value; the class changes the colors and sizes
    new MutationObserver((records) => {
        if (records.some(record => ['min', 'max', 'step'].includes(record.attributeName))) {
            renderMarks();
        }
        refresh();
    }).observe(element, { attributes: true, attributeFilter: ['min', 'max', 'step', 'class', 'disabled'] });

    element.addEventListener('input', refresh);
    element.addEventListener('change', refresh);
    return refresh;
};

/**
 * Initializes an instance of HTMLInputElement as a range input, looking like a MUI slider.
 *
 * It sets the element's type to 'range', then invokes the function `initInputBase(element, ...properties)`.
 *
 * The element gets the class 'rangeInput' by default; an `additionalClassName` property adds further classes
 * (the color classes 'rangeInput-secondary', '-error', '-warning', '-info', '-success').
 * Its `errorClassName` defaults to 'rangeInput-error'.
 * Its `busyClassName` defaults to 'rangeInput-busy'.
 *
 * While the user types, the property `error` is set to true if the value does not match the `pattern` attribute (when there is one).
 *
 * The element gets the property 'displaySize', which accepts 'small', 'medium' (the default) and 'large'. The small and medium
 * sizes are MUI's slider sizes (track 2px and 4px, thumb 12px and 20px); MUI has no large slider, so the large size extends
 * them (track 6px, thumb 28px).
 *
 * The halo that is around the thumb (8px while the mouse is over the slider, or it has the focus, and 14px while it is pressed) is out of the
 * box of the input, so the overflow of the input is visible, and the slider has a margin of 14px above and below it (at the left and right of
 * the vertical one), so that the halo is not hidden by its parent: like the padding of MUI's slider. The halo that is out of the ends of the track
 * is hidden by a parent that has no room there: leave some space at the sides of the slider.
 *
 * The element gets the property 'orientation', which accepts 'horizontal' (the default) and 'vertical'. The vertical slider has the minimum at the
 * bottom, and its length is its height (200px by default; set it with the style `height`). It is drawn by the browser, with the writing mode of the
 * input: it needs a browser that supports it for the input of range (Chrome 124, Firefox 133, Safari 17.4 and later). The marks are along the track,
 * the labels of the marks are at the right of the slider, and the label of the value is at the left of the thumb. The keyboard and the mouse are the ones that the
 * browser has for a vertical input of range.
 * 
 * The slider has discrete values when it has a `step` (an attribute or a property of the input, as in any range input): the thumb only
 * stops on `min` plus a multiple of the step. The filled part of the track follows the value, also when the value, the limits or the
 * step are changed by the code (as the value of the input, `valueAsNumber`, `stepUp()` and `stepDown()`). The element also gets the properties
 * of MUI's discrete slider:
 *  - `marks`: false (the default); true, for a mark at every step (up to 1000, and none if the step is 'any'); or an array of numbers, or of
 *    objects `{ value, label }`, for the marks at those values, with the label below the mark if it has one. The marks are small dots on the track,
 *    which show in a different color while they are in the filled part.
 *  - `valueLabelDisplay`: 'off' (the default), 'auto' or 'on'. A label with the value is shown over the thumb: always ('on'), or while the mouse is
 *    over the slider, or the slider has the focus or is being dragged ('auto').
 *  - `valueLabelFormat`: a function that is passed the value (a number), and returns what the label shows; the default shows the number.
 * The marks and the label are elements next to the input, so, when the slider has them, it is wrapped in a container (a span of class
 * 'input-container' and 'rangeInput-container') as soon as it has a parent; the container follows the input when it is moved or removed (see
 * `getInputContainer` in input.js). In the horizontal slider the label of the value is over the slider and the labels of the marks are below it;
 * in the vertical one the label of the value is at the left and the labels of the marks at the right: the container leaves room for them with its
 * margins, as an element that has a margin.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRangeInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'range';
    const refresh = defineSliderProperties(element);
    defineDisplaySizeProperty(element, 'rangeInput-small', 'rangeInput-large');
    initInputBase(element, { additionalClassName: 'rangeInput', errorClassName: 'rangeInput-error', busyClassName: 'rangeInput-busy' }, ...properties);
    validateOnInput(element);
    refresh();
}

/**
 * Creates a range input.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rangeInput = (...properties) => {
    const element = document.createElement('input');
    initRangeInput(element, ...properties);
    return element;
}
