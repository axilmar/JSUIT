import { initDiv } from "../html/div.js";
import { adoptStyleSheet, toLabelElement } from "../utility/utility.js";

import badgeStyleSheet from './badge.css' with { type: 'css' };

adoptStyleSheet(badgeStyleSheet);

const LABEL_CLASS = 'badge-label';
const LABEL_DOT_CLASS = 'badge-label-dot';
const LABEL_ENTER_CLASS = 'badge-label-enter';
const LABEL_PULSE_CLASS = 'badge-label-pulse';
const ANIMATION_TYPES = ['none', 'grow', 'pulse'];
const LABEL_ANIMATED_CLASS = 'badge-label-animated';
const LABEL_HIDDEN_CLASS = 'badge-label-hidden';
const LEAVE_TIMEOUT = 300;    //ms: a little more than the 195ms of the transition

const HORIZONTAL_POSITIONS = { start: 'start', left: 'start', end: 'end', right: 'end' };
const VERTICAL_POSITIONS = { start: 'start', top: 'start', end: 'end', bottom: 'end' };

//converts an offset to a css length: a number is in pixels, a string is a css length
const toCssLength = (value) => typeof value === 'number' ? value + 'px' : String(value);

//defines the properties that position the label: the sides, and the offsets of the center of the label from the center of the element
const definePositionProperties = (element) => {
    const state = { horizontal: 'end', vertical: 'start', horizontalOffset: '50%', verticalOffset: '50%' };

    //the center of the label, in the box of the badge: the center of the box, plus or minus the offset
    const update = () => {
        const left = state.horizontal === 'end' ? '+' : '-';
        const top = state.vertical === 'end' ? '+' : '-';
        element.style.setProperty('--badge-left', `calc(50% ${left} ${state.horizontalOffset})`);
        element.style.setProperty('--badge-top', `calc(50% ${top} ${state.verticalOffset})`);
    };

    const define = (name, get, set) => {
        Object.defineProperty(element, name, {
            configurable: true,
            enumerable: true,
            get,
            set: (value) => { set(value); update(); }
        });
    };

    define('labelHorizontalPosition', () => state.horizontal, (value) => {
        console.assert(Object.hasOwn(HORIZONTAL_POSITIONS, value));
        state.horizontal = HORIZONTAL_POSITIONS[value] ?? 'end';
    });
    define('labelVerticalPosition', () => state.vertical, (value) => {
        console.assert(Object.hasOwn(VERTICAL_POSITIONS, value));
        state.vertical = VERTICAL_POSITIONS[value] ?? 'start';
    });
    define('labelHorizontalOffset', () => state.horizontalOffset, (value) => {
        console.assert(typeof value === 'string' || typeof value === 'number');
        state.horizontalOffset = toCssLength(value);
    });
    define('labelVerticalOffset', () => state.verticalOffset, (value) => {
        console.assert(typeof value === 'string' || typeof value === 'number');
        state.verticalOffset = toCssLength(value);
    });

    update();
};

//defines the properties 'label' and 'labelAnimationType'
const defineLabelProperties = (element) => {
    let label = null;
    let animationType = 'none';
    let leaving = null;     //the label that is shrinking before it is removed, with the function that removes it

    const finishLeaving = () => {
        if (leaving) {
            leaving.finish();
        }
    };

    //plays the animation of the label growing, and pulsing if the type is 'pulse'; they are css animations, so they also run when the element is not shown yet
    const enter = (newLabel) => {
        newLabel.classList.add(LABEL_ENTER_CLASS);
        newLabel.classList.toggle(LABEL_PULSE_CLASS, animationType === 'pulse');
        newLabel.addEventListener('animationend', (event) => {
            if (event.animationName === 'badge-label-enter' && animationType !== 'pulse') {
                newLabel.classList.remove(LABEL_ENTER_CLASS);
            }
        });
    };

    //shrinks the label, then removes it
    const leave = (oldLabel) => {
        let timeout;
        const finish = () => {
            clearTimeout(timeout);
            oldLabel.removeEventListener('transitionend', finish);
            oldLabel.classList.remove(LABEL_HIDDEN_CLASS, LABEL_ANIMATED_CLASS, LABEL_ENTER_CLASS, LABEL_PULSE_CLASS);
            oldLabel.remove();
            leaving = null;
        };
        leaving = { finish };
        oldLabel.classList.remove(LABEL_ENTER_CLASS, LABEL_PULSE_CLASS);     //an animation would override the transition
        oldLabel.classList.add(LABEL_ANIMATED_CLASS, LABEL_HIDDEN_CLASS);
        oldLabel.addEventListener('transitionend', finish);
        timeout = setTimeout(finish, LEAVE_TIMEOUT);    //the transition does not run if the label is not shown
    };

    Object.defineProperty(element, 'label', {
        configurable: true,
        enumerable: true,
        get: () => label,
        set: (newLabel) => {
            const dot = newLabel === '';
            newLabel = toLabelElement(newLabel);
            finishLeaving();
            const oldLabel = label;
            label = newLabel;
            if (oldLabel === newLabel) {
                return;
            }
            //a label that replaces another one does not animate, as in MUI: the badge was already shown
            if (animationType !== 'none' && oldLabel && !newLabel) {
                leave(oldLabel);
            }
            else {
                oldLabel?.remove();
            }
            if (label) {
                label.classList.add(LABEL_CLASS);
                label.classList.toggle(LABEL_DOT_CLASS, dot);
                element.append(label);
                if (animationType !== 'none' && !oldLabel) {
                    enter(label);
                }
                //the new label takes the place of the old one: it does not grow, but it keeps pulsing
                else if (animationType === 'pulse' && oldLabel) {
                    label.classList.add(LABEL_PULSE_CLASS);
                }
            }
        }
    });

    Object.defineProperty(element, 'labelAnimationType', {
        configurable: true,
        enumerable: true,
        get: () => animationType,
        set: (value) => {
            console.assert(ANIMATION_TYPES.includes(value));
            animationType = ANIMATION_TYPES.includes(value) ? value : 'none';
            if (!label) {
                return;
            }
            if (animationType === 'none') {
                label.classList.remove(LABEL_ENTER_CLASS, LABEL_PULSE_CLASS);
            }
            //the properties are set in the order they are given: a label set before this property, while the element is being created, enters now
            else if (!element.isConnected && !label.classList.contains(LABEL_ENTER_CLASS)) {
                enter(label);
            }
            else {
                label.classList.toggle(LABEL_PULSE_CLASS, animationType === 'pulse');
            }
        }
    });
};

/**
 * Initializes an instance of HTMLDivElement as a badge, looking like MUI's Badge.
 *
 * It invokes the function `initDiv(element, ...properties)`.
 *
 * The element gets the class 'badge' by default; an `additionalClassName` property adds further classes. The content of the element is
 * what the badge is attached to. The colors of the label are the css properties `--badge-main` (the background, default MUI's primary
 * blue) and `--badge-contrast` (the text color, default white).
 *
 * The element gets the following properties:
 *  - `label`: an element, or any other value (it is converted to a string, and a span with that text is created from it). The label
 *    is shown over a corner of the element, as MUI's badge. The empty string '' gives a dot (a filled circle of 8px, MUI's 'dot' variant).
 *    Setting it to null or undefined removes the label. It returns the element of the label, or null. By default there is no label.
 *  - `labelHorizontalPosition`: 'start' or 'left' (the label is attached to the left side of the element), 'end' or 'right' (the right
 *    side, the default).
 *  - `labelVerticalPosition`: 'start' or 'top' (the label is attached to the top side of the element, the default), 'end' or 'bottom' (the
 *    bottom side).
 *  - `labelHorizontalOffset`: the distance from the horizontal center of the element to the horizontal center of the label, a css length
 *    (a number is in pixels); a percentage is of the width of the element. The default is '50%', which puts the center of the label on the
 *    side of the element.
 *  - `labelVerticalOffset`: the same for the vertical centers; a percentage is of the height of the element. The default is '50%'.
 *  - `labelAnimationType`: 'none' (the default) shows and removes the label without animation; 'grow' animates it as in MUI: the label grows from nothing
 *    (225ms) when it is set, and shrinks to nothing (195ms) before it is removed when the label is set to null or undefined; 'pulse' does the same
 *    and, after growing, the label keeps pulsing gently (it becomes 30% larger and back, every 1.1s) for as long as it is shown. Replacing a label with
 *    another one is not animated, as in MUI. The order of the properties does not matter.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBadge = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    definePositionProperties(element);
    defineLabelProperties(element);
    initDiv(element, { additionalClassName: 'badge' }, ...properties);
}

/**
 * Creates a badge.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const badge = (...properties) => {
    const element = document.createElement('div');
    initBadge(element, ...properties);
    return element;
}
