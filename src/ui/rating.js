import { initDiv } from "../html/div.js";
import { starIcon } from "../icons/starIcon.js";
import { adoptStyleSheet, defineDisplaySizeProperty, toLabelElement } from "../utility/utility.js";

import ratingStyleSheet from './rating.css' with { type: 'css' };

adoptStyleSheet(ratingStyleSheet);

const VERTICAL_CLASS = 'rating-vertical';
const HOVERING_CLASS = 'rating-hovering';
const ITEM_CLASS = 'rating-item';
const ITEM_ACTIVE_CLASS = 'rating-item-active';
const ITEM_FOCUS_CLASS = 'rating-item-focus';
const ICON_CLASS = 'rating-icon';
const EMPTY_CLASS = 'rating-empty';
const FILLED_CLASS = 'rating-filled';
const LABEL_CLASS = 'rating-label';
const DEFAULT_LABEL_CLASS = 'rating-label-default';

const DEFAULT_FILL_COLOR = '#faaf00';       //MUI's color of the filled icons
const EPSILON = 1e-9;                       //tolerance for the rounding of floating point numbers

//removes the noise of floating point arithmetic: 0.1 + 0.2 becomes 0.3
const clean = (number) => Number(number.toFixed(10));

//the number as shown to the user, with at most two decimals
const format = (number) => String(Number(number.toFixed(2)));

//defines the properties of a rating, which keeps its state in the closure
const defineRatingProperties = (element) => {
    let iconSource = starIcon;      //function that creates an icon, or an icon to clone
    let fillColor = DEFAULT_FILL_COLOR;
    let value = 0;
    let min = 0;
    let max = 5;
    let step = 1;                   //undefined: no rounding
    let size = 5;
    let values = {};
    let label = null;
    let items = [];                 //objects {root, filled}
    let hoverItem = null;           //the item under the mouse
    let hoverValue = null;          //the value under the mouse
    let rebuildScheduled = false;

    const clamp = (number) => Math.min(Math.max(number, min), max);

    //clamps the number to the range and rounds it to the step, counted from min
    const roundToStep = (number, round = Math.round) => {
        number = clamp(number);
        if (step > 0) {
            number = clamp(min + round((number - min) / step) * step);
        }
        return clean(number);
    };

    const ceilToStep = (number) => roundToStep(number, (steps) => Math.ceil(steps - EPSILON));

    //the value that is displayed: the value under the mouse, or the value of the rating
    const displayValue = () => roundToStep(hoverValue ?? value);

    //the text for a value: the string of the closest key of 'values', or the number
    const labelText = (number) => {
        let closest = null;
        for (const key of Object.keys(values)) {
            const keyNumber = Number(key);
            if (!isNaN(keyNumber) && (closest === null || Math.abs(keyNumber - number) < Math.abs(closest.number - number))) {
                closest = { key, number: keyNumber };
            }
        }
        return closest !== null ? String(values[closest.key]) : format(number);
    };

    //the item that holds the fraction of the value that is shown
    const focusIndex = (shown) => {
        const fraction = max > min ? (shown - min) / (max - min) : 0;
        return Math.min(Math.max(Math.ceil(fraction * size - EPSILON) - 1, 0), size - 1);
    };

    //places the label above the item under the mouse
    const positionLabel = () => {
        if (label && hoverItem) {
            label.style.left = hoverItem.offsetLeft + hoverItem.offsetWidth / 2 + 'px';
            label.style.top = hoverItem.offsetTop + 'px';
        }
    };

    //updates the filling of the items, the label and the aria attributes from the state
    const refresh = () => {
        const shown = displayValue();
        const total = max > min ? (shown - min) / (max - min) * size : 0;
        const focused = items.length > 0 && element.matches(':focus-visible') ? focusIndex(shown) : -1;
        items.forEach((item, index) => {
            const fraction = Math.min(Math.max(total - index, 0), 1);
            item.filled.style.width = fraction * 100 + '%';
            item.root.classList.toggle(ITEM_ACTIVE_CLASS, item.root === hoverItem);
            item.root.classList.toggle(ITEM_FOCUS_CLASS, index === focused);
        });
        element.classList.toggle(HOVERING_CLASS, hoverItem !== null);
        if (label) {
            label.textContent = labelText(shown);
        }
        const current = roundToStep(value);
        element.setAttribute('aria-valuemin', min);
        element.setAttribute('aria-valuemax', max);
        element.setAttribute('aria-valuenow', current);
        element.setAttribute('aria-valuetext', labelText(current));
        positionLabel();
    };

    //creates an icon of the rating
    const createIcon = (color) => {
        const icon = typeof iconSource === 'function' ? iconSource() : iconSource.cloneNode(true);
        icon.classList.add('icon', ICON_CLASS);
        if ('fillColor' in icon) {
            icon.fillColor = color;
        }
        else if (color) {
            icon.style.setProperty('--icon-fill-color', color);
        }
        return icon;
    };

    //creates the items: each has an empty icon, and over it a clipped filled icon
    const rebuild = () => {
        rebuildScheduled = false;
        for (const item of items) {
            item.root.remove();
        }
        hoverItem = null;
        hoverValue = null;
        items = Array.from({ length: size }, () => {
            const root = document.createElement('span');
            root.classList.add(ITEM_CLASS);
            const empty = createIcon('');
            empty.classList.add(EMPTY_CLASS);
            const filled = document.createElement('span');
            filled.classList.add(FILLED_CLASS);
            filled.append(createIcon(fillColor));
            root.append(empty, filled);
            return { root, filled };
        });
        element.prepend(...items.map(item => item.root));
        refresh();
    };

    //rebuilds in a microtask, so that setting several properties in a row builds the icons once
    const scheduleRebuild = () => {
        if (!rebuildScheduled) {
            rebuildScheduled = true;
            queueMicrotask(rebuild);
        }
    };

    //finds the item under the pointer event and the value under the pointer
    const locate = (event) => {
        const index = items.findIndex(item => item.root.contains(event.target));
        if (index < 0) {
            return null;
        }
        const rect = items[index].root.getBoundingClientRect();
        const fraction = rect.width > 0 ? Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1) : 1;
        return { item: items[index].root, value: ceilToStep(min + (index + fraction) / size * (max - min)) };
    };

    //changes the value as the user does: the events 'input' and 'change' are dispatched, as in an input element
    const commit = (newValue) => {
        newValue = roundToStep(newValue);
        if (newValue === roundToStep(value)) {
            return;
        }
        value = newValue;
        refresh();
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
    };

    const define = (name, get, set) => {
        Object.defineProperty(element, name, { configurable: true, enumerable: true, get, set });
    };

    const assertNumber = (number) => console.assert(typeof number === 'number' && !isNaN(number));

    define('icon', () => iconSource, (newIcon) => {
        console.assert(typeof newIcon === 'function' || newIcon instanceof HTMLElement);
        iconSource = newIcon;
        scheduleRebuild();
    });

    define('fillColor', () => fillColor, (newColor) => {
        console.assert(typeof newColor === 'string');
        fillColor = newColor;
        scheduleRebuild();
    });

    define('value', () => value, (newValue) => {
        assertNumber(newValue);
        value = newValue;
        refresh();
    });

    define('min', () => min, (newMin) => {
        assertNumber(newMin);
        min = newMin;
        refresh();
    });

    define('max', () => max, (newMax) => {
        assertNumber(newMax);
        max = newMax;
        refresh();
    });

    define('step', () => step, (newStep) => {
        console.assert(newStep === null || newStep === undefined || (typeof newStep === 'number' && newStep >= 0));
        step = newStep > 0 ? newStep : undefined;
        refresh();
    });

    define('size', () => size, (newSize) => {
        console.assert(Number.isInteger(newSize) && newSize > 0);
        size = newSize;
        scheduleRebuild();
    });

    define('values', () => values, (newValues) => {
        console.assert(typeof newValues === 'object');
        values = newValues ?? {};
        refresh();
    });

    define('label', () => label, (newLabel) => {
        label?.remove();
        label = toLabelElement(newLabel);
        if (label) {
            label.classList.add(LABEL_CLASS);
            element.append(label);
        }
        refresh();
    });

    define('orientation', () => element.classList.contains(VERTICAL_CLASS) ? 'vertical' : 'horizontal', (newOrientation) => {
        console.assert(newOrientation === 'horizontal' || newOrientation === 'vertical');
        element.classList.toggle(VERTICAL_CLASS, newOrientation === 'vertical');
        element.setAttribute('aria-orientation', newOrientation);
    });

    //the mouse: the filling follows it, the label shows the value under it, a click sets the value
    const hover = (located) => {
        hoverItem = located?.item ?? null;
        hoverValue = located?.value ?? null;
        refresh();
    };

    element.addEventListener('pointermove', (event) => hover(locate(event)));
    element.addEventListener('pointerleave', () => hover(null));
    element.addEventListener('click', (event) => {
        const located = locate(event);
        if (located) {
            commit(located.value);
        }
    });

    //the keyboard: the arrows move the value by a step (or by an icon when there is no step), home and end go to the limits
    element.addEventListener('keydown', (event) => {
        const unit = step > 0 ? step : (max - min) / size;
        const current = roundToStep(value);
        let newValue;
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                newValue = current + unit;
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                newValue = current - unit;
                break;
            case 'Home':
                newValue = min;
                break;
            case 'End':
                newValue = max;
                break;
            default:
                return;
        }
        event.preventDefault();
        commit(newValue);
    });
    element.addEventListener('focus', refresh);
    element.addEventListener('blur', refresh);

    //the default label
    const defaultLabel = document.createElement('span');
    defaultLabel.classList.add(DEFAULT_LABEL_CLASS);
    element.label = defaultLabel;

    scheduleRebuild();
};

/**
 * Initializes an instance of HTMLDivElement as a rating, looking like MUI's Rating.
 *
 * It invokes the function `initDiv(element, ...properties)`.
 *
 * The element gets the class 'rating' by default; an `additionalClassName` property adds further classes.
 *
 * The rating shows `size` icons, which are filled, fully or partially, in proportion to the value. The user changes the value
 * by clicking an icon (the part of the icon that is clicked matters when the step is less than 1) or with the keyboard (the
 * arrow keys, home and end). While the mouse is over the icons, the filling follows the mouse, and the label shows the
 * value under the mouse.
 *
 * The element gets the property 'displaySize', which accepts 'small' (18px icons), 'medium' (24px, the default) and 'large'
 * (30px), the sizes of MUI's Rating.
 *
 * The element gets the following properties:
 *  - `icon`: the icon to show; either a function that returns a new icon each time it is invoked, or an icon element, which is
 *    cloned for each position. The icon must be filled with `var(--icon-fill-color, currentColor)`, like `assets/icons/star.svg`,
 *    so that its `fillColor` property works. The default is the function `starIcon`.
 *  - `fillColor`: the color of the filled part of the icons; the default is MUI's #faaf00. The empty part has MUI's color
 *    rgba(0, 0, 0, 0.26).
 *  - `value`: the current value; the default is 0. A value outside of the range is displayed as the min or the max.
 *  - `min` and `max`: the range of the value; the defaults are 0 and 5. The icons together span the range.
 *  - `step`: the displayed value is rounded to a multiple of the step, counted from `min`; the default is 1. If it is set to
 *    null, undefined or 0, then the value is never rounded.
 *  - `size`: the number of icons; the default is 5.
 *  - `orientation`: 'horizontal' (the default) or 'vertical'. The gap, padding, border and margin are 0, as in MUI.
 *  - `values`: an object whose keys are numbers and whose values are strings; the default is empty. When it is not empty, the
 *    label shows the string of the key that is closest to the displayed value.
 *  - `label`: the element shown above the icon under the mouse, centered on the icon; its text is the string of `values`, or
 *    the displayed value, rounded by the step, when `values` is empty. Any value that is not an element is converted to a string, which becomes the text of a span. The default is a span
 *    that looks like MUI's Tooltip; null removes the label.
 *
 * When the user changes the value, the events 'input' and 'change' are dispatched, as in an input element. They are not
 * dispatched when the value is set from code.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRating = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    element.setAttribute('role', 'slider');
    element.tabIndex = 0;
    defineDisplaySizeProperty(element, 'rating-small', 'rating-large');
    defineRatingProperties(element);
    initDiv(element, { additionalClassName: 'rating' }, ...properties);
}

/**
 * Creates a rating.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rating = (...properties) => {
    const element = document.createElement('div');
    initRating(element, ...properties);
    return element;
}
