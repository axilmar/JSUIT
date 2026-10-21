import { initIconButton } from "./iconButton.js";
import { checkIcon } from "./checkIcon.js";
import { adoptStyleSheet } from "./utility.js";
import { SelectedChangedEvent } from "./SelectedChangedEvent.js";

import checkBoxStyleSheet from './checkBox.css' with { type: 'css' };

adoptStyleSheet(checkBoxStyleSheet);

const SELECTED_CLASS = 'checkBox-selected';

//defines the boolean property 'selected'
const defineSelectedProperty = (element) => {
    Object.defineProperty(element, 'selected', {
        configurable: true,
        enumerable: true,
        get: () => element.classList.contains(SELECTED_CLASS),
        set: (value) => {
            value = !!value;
            if (value === element.classList.contains(SELECTED_CLASS)) {
                return;
            }
            element.classList.toggle(SELECTED_CLASS, value);
            element.dispatchEvent(new SelectedChangedEvent(value));
        }
    });
};

//defines the property 'onselectedchanged', which behaves like the DOM 'on<event>' properties
const defineOnSelectedChangedProperty = (element) => {
    let handler = null;

    Object.defineProperty(element, 'onselectedchanged', {
        configurable: true,
        enumerable: true,
        get: () => handler,
        set: (newHandler) => {
            console.assert(newHandler === null || typeof newHandler === 'function');
            if (handler) {
                element.removeEventListener(SelectedChangedEvent.NAME, handler);
            }
            handler = newHandler;
            if (handler) {
                element.addEventListener(SelectedChangedEvent.NAME, handler);
            }
        }
    });
};

//the click event listener; clicks stop at checkbox level
const clickEventListener = (event) => {
    event.stopPropagation(); 
    event.currentTarget.selected = !event.currentTarget.selected;
}

/**
 * Initializes an instance of HTMLButtonElement as a check box.
 * 
 * It invokes the function `initIconButton(element, ...properties)`.
 * 
 * The element gets the class 'checkBox' by default, and contains a check icon.
 * 
 * The element gets a boolean property 'selected' (default false), and looks like a MUI checkbox: the check mark is visible
 * only while it is true. The button has the same size in both cases.
 * 
 * Whenever 'selected' changes, a `SelectedChangedEvent` is dispatched on the element.
 * 
 * The element gets a property 'onselectedchanged', a function (or null) that handles the 'selectedchanged' event.
 * Like the DOM 'on<event>' properties, setting it replaces the previous handler.
 * 
 * Clicking the button toggles 'selected'. This is a click listener, so an `onclick` property still works in addition to it.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCheckBox = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    defineSelectedProperty(element);
    defineOnSelectedChangedProperty(element);
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
