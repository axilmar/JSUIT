import { initIconButton } from "./iconButton.js";
import { bulletIcon } from "./bulletIcon.js";
import { adoptStyleSheet } from "./utility.js";
import { SelectedChangedEvent } from "./SelectedChangedEvent.js";

import radioButtonStyleSheet from './radioButton.css' with { type: 'css' };

adoptStyleSheet(radioButtonStyleSheet);

const SELECTED_CLASS = 'radioButton-selected';

//the radio buttons that were created by this module
const radioButtons = new WeakSet();

//unselects the other radio buttons with the same name, within the same parent element
const unselectOthers = (element) => {
    if (!element.name || !element.parentElement) {
        return;
    }
    for (const sibling of element.parentElement.children) {
        if (sibling !== element && radioButtons.has(sibling) && sibling.name === element.name) {
            sibling.selected = false;
        }
    }
};

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
            if (value) {
                unselectOthers(element);
            }
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

/**
 * Initializes an instance of HTMLButtonElement as a radio button.
 * 
 * It invokes the function `initIconButton(element, ...properties)`.
 * 
 * The element gets the class 'radioButton' by default, and contains a bullet icon.
 * 
 * The element gets a boolean property 'selected' (default false), and looks like a MUI radio button: the bullet is visible
 * only while it is true. The button has the same size in both cases.
 * 
 * Whenever 'selected' changes, a `SelectedChangedEvent` is dispatched on the element.
 * 
 * The element gets a property 'onselectedchanged', a function (or null) that handles the 'selectedchanged' event.
 * Like the DOM 'on<event>' properties, setting it replaces the previous handler.
 * 
 * When a radio button gets selected, the other radio buttons with the same (non-empty) `name`
 * in the same parent element are unselected. The `name` is the button's standard `name` property.
 * 
 * Clicking the button selects it; as with a native radio button, a click never deselects it. This is a click listener, so an `onclick` property still works in addition to it.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRadioButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    radioButtons.add(element);
    defineSelectedProperty(element);
    defineOnSelectedChangedProperty(element);
    element.addEventListener('click', () => { element.selected = true; });
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
