import { initDiv } from "../html/div.js";
import { adoptStyleSheet, toLabelElement } from "../utility/utility.js";

import groupStyleSheet from './group.css' with { type: 'css' };

adoptStyleSheet(groupStyleSheet);

const LABEL_CLASS = 'group-label';
const HORIZONTAL_CLASS = 'group-horizontal';
const LABELED_CLASS = 'group-labeled';

let nextLabelId = 1;

//defines the property 'label': an element, or any other value, which is converted to a string that becomes the text of a span; it is the first child of the group
const defineLabelProperty = (element) => {
    let label = null;
    let observer = null;

    //opens the notch in the outline for the width of the label
    const updateNotch = () => {
        element.style.setProperty('--group-notch-width', label ? label.offsetWidth + 'px' : '0px');
    };

    Object.defineProperty(element, 'label', {
        configurable: true,
        enumerable: true,
        get: () => label,
        set: (newLabel) => {
            newLabel = toLabelElement(newLabel);
            observer?.disconnect();
            observer = null;
            label?.remove();
            element.removeAttribute('aria-labelledby');
            label = newLabel ?? null;
            if (label) {
                label.classList.add(LABEL_CLASS);
                label.id ||= 'group-label-' + nextLabelId++;
                element.setAttribute('aria-labelledby', label.id);
                element.prepend(label);
                observer = new ResizeObserver(updateNotch);
                observer.observe(label);
            }
            element.classList.toggle(LABELED_CLASS, label !== null);
            updateNotch();
        }
    });
};

//defines the property 'orientation'
const defineOrientationProperty = (element) => {
    let orientation = 'vertical';

    Object.defineProperty(element, 'orientation', {
        configurable: true,
        enumerable: true,
        get: () => orientation,
        set: (value) => {
            console.assert(value === 'horizontal' || value === 'vertical');
            orientation = value;
            element.classList.toggle(HORIZONTAL_CLASS, value === 'horizontal');
        }
    });
};

/**
 * Initializes an instance of HTMLDivElement as a group of elements, looking like MUI's RadioGroup, in an outlined box.
 * 
 * It invokes the function `initDiv(element, ...properties)`.
 * 
 * The element gets the class 'group' by default; an `additionalClassName` property adds further classes.
 * Its `errorClassName` defaults to 'group-error', which gives the border and the label the error color.
 * 
 * The group has a 1px outline border with rounded corners, as MUI's outlined fields: it darkens on hover and takes the primary
 * color (2px) while a child has the focus.
 * 
 * The element gets the following properties:
 *  - `label`: an element, or any other value (it is converted to a string, and a span with that text is created from it). The label is shown on the top border, with the size of the text of the children, and is the first child of the group; its color is the primary color while a child has
 *    the focus. The label interrupts the border: a notch as wide as the label
 *    is cut in the outline, so it works on any background. Setting it to null removes the label. The group is labelled by it for assistive technologies.
 *  - `orientation`: 'vertical' (the default) lays the children out one below the other; 'horizontal' lays them out in a
 *    row, wrapping to the next row when there is no room.
 * 
 * The children are direct children of the group, so that the children that depend on their parent (for example the radio
 * buttons, which unselect the others with the same name in the same parent) work as expected.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGroup = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    element.setAttribute('role', 'group');
    defineLabelProperty(element);
    defineOrientationProperty(element);
    initDiv(element, { additionalClassName: 'group', errorClassName: 'group-error' }, ...properties);
}

/**
 * Creates a group.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const group = (...properties) => {
    const element = document.createElement('div');
    initGroup(element, ...properties);
    return element;
}
