import { initIconButton } from "./iconButton.js";
import { checkIcon } from "./checkIcon.js";
import { adoptStyleSheet } from "../utility/utility.js";

import checkBoxStyleSheet from './checkBox.css' with { type: 'css' };

adoptStyleSheet(checkBoxStyleSheet);

const SELECTED_CLASS = 'checkBox-selected';

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
            element.classList.toggle(SELECTED_CLASS, value);
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
};

//the click event listener; clicks stop at checkbox level
const clickEventListener = (event) => {
    event.stopPropagation();
    event.currentTarget.value = !event.currentTarget.value;
}

/**
 * Initializes an instance of HTMLButtonElement as a check box.
 * 
 * It invokes the function `initIconButton(element, ...properties)`.
 * 
 * The element gets the class 'checkBox' by default, and contains a check icon.
 * 
 * The element gets a boolean property 'value' (default false; it replaces the string 'value' of a button), and looks like a MUI checkbox:
 * the check mark is visible only while it is true. The button has the same size in both cases.
 *
 * The 'displaySize' property of the icon button sets the size of the box: 'small' 20px, 'medium' 24px (the default), 'large' 28px.
 *
 * Whenever 'value' changes, whether by the user or by the code, the event 'change' is dispatched on the element (it bubbles),
 * so `onchange` sets its handler.
 *
 * Clicking the button toggles 'value'. This is a click listener, so an `onclick` property still works in addition to it.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCheckBox = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    defineValueProperty(element);
    element.addEventListener('click', clickEventListener, true);
    initIconButton(element, { additionalClassName: 'checkBox', icon: checkIcon() }, ...properties);
}

/**
 * Creates a check box.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const checkBox = (...properties) => {
    const element = document.createElement('button');
    initCheckBox(element, ...properties);
    return element;
}
