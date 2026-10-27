import { initDiv } from "../html/div.js";
import { adoptStyleSheet, defineEventProperty } from "../utility/utility.js";

import expandableElementStyleSheet from './expandableElement.css' with { type: 'css' };

adoptStyleSheet(expandableElementStyleSheet);

const OPEN_CLASS = 'expandableElement-open';
const WIDTH_VARIABLE = '--expandableElement-width';
const EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';      //MUI's theme.transitions.easing.easeInOut
const TRANSITION_DIRECTIONS = ['leftToRight', 'rightToLeft', 'topToBottom', 'bottomToTop'];

//the css property and the css class of the axis of each direction
const AXES = {
    topToBottom: { property: 'height', className: 'expandableElement-vertical' },
    bottomToTop: { property: 'height', className: 'expandableElement-vertical' },
    leftToRight: { property: 'width', className: 'expandableElement-horizontal' },
    rightToLeft: { property: 'width', className: 'expandableElement-horizontal' }
};

//MUI's duration for a size that is not known in advance (theme.transitions.getAutoHeightDuration), in milliseconds
const getAutoDuration = (size) => {
    if (!size) {
        return 0;
    }
    const constant = size / 36;
    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
};

//defines the properties 'open' and 'transitionDirection', and the transition between the open and the closed state
const defineExpandableProperties = (element) => {
    let open = false;
    let transitionDirection = 'topToBottom';
    let animation = null;           //the transition in effect
    let transitionId = 0;           //identifies the last started transition

    const axis = () => AXES[transitionDirection];

    //the current size of the element along its axis
    const currentSize = () => element.getBoundingClientRect()[axis().property];

    //the size that the element has when it is open: the size is made automatic for a moment
    const naturalSize = () => {
        const { property } = axis();
        const savedSize = element.style[property];
        const savedWidth = element.style.getPropertyValue(WIDTH_VARIABLE);
        element.style.removeProperty(WIDTH_VARIABLE);
        element.style[property] = 'auto';
        const size = element.getBoundingClientRect()[property];
        element.style[property] = savedSize;
        if (savedWidth) {
            element.style.setProperty(WIDTH_VARIABLE, savedWidth);
        }
        return size;
    };

    const end = () => {
        element.style.removeProperty(WIDTH_VARIABLE);
        element.dispatchEvent(new Event('transitionEnded'));
    };

    //the transition to the new state, from the given size; if there is a running one, it is interrupted, and the new one goes back from where the element is
    const transition = (from) => {
        const { property } = axis();
        const interrupted = animation !== null;
        if (interrupted) {
            animation.cancel();
            animation = null;
        }
        const id = ++transitionId;
        const natural = naturalSize();
        const target = open ? natural : 0;
        if (interrupted) {
            element.dispatchEvent(new Event('transitionEnded'));
        }
        element.dispatchEvent(new Event('transitionStarted'));
        if (id !== transitionId) {      //an event handler changed the state: that transition has taken over
            return;
        }
        const duration = natural > 0 ? getAutoDuration(natural) * Math.abs(target - from) / natural : 0;
        if (duration === 0 || !element.isConnected || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            end();
            return;
        }
        if (property === 'width') {
            element.style.setProperty(WIDTH_VARIABLE, natural + 'px');
        }
        const current = element.animate(
            [{ [property]: from + 'px', visibility: 'visible' }, { [property]: target + 'px', visibility: 'visible' }],
            { duration, easing: EASING }
        );
        animation = current;
        current.addEventListener('finish', () => {
            if (animation === current) {
                animation = null;
                end();
            }
        });
    };

    Object.defineProperty(element, 'open', {
        configurable: true,
        enumerable: true,
        get: () => open,
        set: (value) => {
            value = !!value;
            if (value === open) {
                return;
            }
            const from = currentSize();         //measured before the class changes, while a transition in effect still shows its size
            open = value;
            element.classList.toggle(OPEN_CLASS, open);
            transition(from);
        }
    });

    Object.defineProperty(element, 'transitionDirection', {
        configurable: true,
        enumerable: true,
        get: () => transitionDirection,
        set: (value) => {
            console.assert(TRANSITION_DIRECTIONS.includes(value));
            element.classList.remove('expandableElement-vertical', 'expandableElement-horizontal', ...TRANSITION_DIRECTIONS.map(d => 'expandableElement-' + d));
            transitionDirection = value;
            element.classList.add(axis().className, 'expandableElement-' + value);
        }
    });
};

/**
 * Initializes an instance of HTMLDivElement as an expandable element, which shows or hides its children with the transition of MUI's Collapse.
 *
 * It invokes the function `initDiv(element, ...properties)`.
 *
 * The element gets the class 'expandableElement' by default; an `additionalClassName` property adds further classes. While it is closed, it has
 * no size along its transition axis and its children are not visible (and cannot get the focus). The transition changes the size of the element,
 * like MUI's Collapse does: the easing is MUI's ease in out, and the duration is the one that MUI computes from the size of the children (for
 * example 281ms for 200px). The padding and the border of the element are not animated along the axis: the children should have them.
 *
 * The element gets the following properties:
 *  - `open`: a boolean; if true, the children are shown, if false they are hidden. The default is false. Setting the value it already has does nothing.
 *  - `transitionDirection`: 'topToBottom' (the default), 'bottomToTop', 'leftToRight' or 'rightToLeft': the axis of the transition and the side
 *    that the element expands to. The children stay at the edge the element expands from. The position of the element is the one its parent gives to
 *    it: to expand to the top or to the left, the parent should keep the element at its bottom or right side (for example with a flex layout).
 *    The size the element transitions to is the one it has when it is open, i.e. a horizontal element has the width that its parent gives to an
 *    automatic width (in a block parent, the width of the parent; in a flex row, the width of the children).
 *
 * The element dispatches the events:
 *  - 'transitionStarted': when the element goes from closed to open or from open to closed. It is dispatched after the property `open` has the new
 *    value, so a handler can tell which transition started. The property 'ontransitionstarted' sets its handler.
 *  - 'transitionEnded': when the transition animation ends. The property 'ontransitionended' sets its handler.
 *
 * If `open` changes while a transition runs, the transition is interrupted: 'transitionEnded' is dispatched for it, then 'transitionStarted' for the new
 * one, which goes back from the size the element has at that moment (it takes the time that is proportional to the size to cover). If there is
 * nothing to animate (the element is not in a document, it has no content, or the user prefers reduced motion), both events are dispatched one after the
 * other at once.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExpandableElement = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    defineExpandableProperties(element);
    defineEventProperty(element, 'ontransitionstarted', 'transitionStarted');
    defineEventProperty(element, 'ontransitionended', 'transitionEnded');
    element.transitionDirection = 'topToBottom';
    initDiv(element, { additionalClassName: 'expandableElement' }, ...properties);
}

/**
 * Creates an expandable element.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const expandableElement = (...properties) => {
    const element = document.createElement('div');
    initExpandableElement(element, ...properties);
    return element;
}
