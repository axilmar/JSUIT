import { initIconButton } from "./iconButton.js";
import { bulletIcon } from "../icons/bulletIcon.js";
import { adoptStyleSheet } from "../utility/utility.js";

import radioButtonStyleSheet from './radioButton.css' with { type: 'css' };

adoptStyleSheet(radioButtonStyleSheet);

const SELECTED_CLASS = 'radioButton-selected';

//the radio buttons that were created by this module
const radioButtons = new WeakSet();

//unselects the other radio buttons within the same parent element that have the same name (the ones with no name are one group, too)
const unselectOthers = (element) => {
    if (!element.parentElement) {
        return;
    }
    for (const sibling of element.parentElement.children) {
        if (sibling !== element && radioButtons.has(sibling) && sibling.name === element.name) {
            sibling.value = false;
        }
    }
};

//defines the boolean property 'value'
const defineValueProperty = (element) => {
    Object.defineProperty(element, 'value', {
        configurable: true,
        enumerable: true,
        get: () => element.classList.contains(SELECTED_CLASS),
        set: (value) => {
            value = !!value;
            if (value === element.classList.contains(SELECTED_CLASS)) {
                return;
            }
            if (value) {
                unselectOthers(element);
            }
            element.classList.toggle(SELECTED_CLASS, value);
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
};

/**
 * Initializes an instance of HTMLButtonElement as a radio button.
 * 
 * It invokes the function `initIconButton(element, ...properties)`.
 * 
 * The element gets the class 'radioButton' by default, and contains a bullet icon.
 * 
 * The element gets a boolean property 'value' (default false; it replaces the string 'value' of a button), and looks like a MUI radio button:
 * the bullet is visible only while it is true. The button has the same size in both cases.
 *
 * The 'displaySize' property of the icon button sets the size of the bullet: 'small' 20px, 'medium' 24px (the default), 'large' 28px.
 *
 * Whenever 'value' changes, whether by the user or by the code, the event 'change' is dispatched on the element (it bubbles),
 * so `onchange` sets its handler. It is dispatched for the radio button that gets selected and for the ones that are unselected by it.
 *
 * When a radio button gets selected (its value becomes true), the other radio buttons with the same `name`
 * in the same parent element are unselected. The `name` is the button's standard `name` property.
 * If the radio button has no name, then only the other radio buttons in the same parent element that have no name are unselected; the ones with a name are not touched.
 * 
 * Clicking the button selects it; as with a native radio button, a click never deselects it. This is a click listener, so an `onclick` property still works in addition to it.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRadioButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    radioButtons.add(element);
    defineValueProperty(element);
    element.addEventListener('click', () => { element.value = true; });
    initIconButton(element, { additionalClassName: 'radioButton', icon: bulletIcon() }, ...properties);
}

/**
 * Creates a radio button.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const radioButton = (...properties) => {
    const element = document.createElement('button');
    initRadioButton(element, ...properties);
    return element;
}
