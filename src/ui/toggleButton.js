import { initButtonBase } from "../html/buttonBase.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "../utility/utility.js";

import toggleButtonStyleSheet from './toggleButton.css' with { type: 'css' };

adoptStyleSheet(toggleButtonStyleSheet);

const SELECTED_CLASS = 'toggleButton-selected';

//the toggle buttons that were created by this module
const toggleButtons = new WeakSet();

//unselects the other toggle buttons within the same parent element that have the same name (the ones with no name are one group, too)
const unselectOthers = (element) => {
    if (!element.parentElement) {
        return;
    }
    for (const sibling of element.parentElement.children) {
        if (sibling !== element && toggleButtons.has(sibling) && sibling.name === element.name) {
            sibling.value = false;
        }
    }
};

const TOGGLE_MODES = ['independent', 'groupedByName', 'groupedByParent'];

//returns true if the button is grouped with its siblings: its mode is 'groupedByName', or it is 'groupedByParent' and the parent is a toggle button group
const isGrouped = (element, toggleMode) => toggleMode === 'groupedByName'
    || (toggleMode === 'groupedByParent' && !!element.parentElement?.classList.contains('toggleButtonGroup'));

//defines the properties 'value' and 'toggleMode', and returns the function that tells if the button is grouped
const defineToggleButtonProperties = (element) => {
    let toggleMode = 'groupedByParent';

    Object.defineProperty(element, 'value', {
        configurable: true,
        enumerable: true,
        get: () => element.classList.contains(SELECTED_CLASS),
        set: (value) => {
            value = !!value;
            if (value === element.classList.contains(SELECTED_CLASS)) {
                return;
            }
            if (value && isGrouped(element, toggleMode)) {
                unselectOthers(element);
            }
            element.classList.toggle(SELECTED_CLASS, value);
            element.setAttribute('aria-pressed', String(value));
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });

    Object.defineProperty(element, 'toggleMode', {
        configurable: true,
        enumerable: true,
        get: () => toggleMode,
        set: (value) => {
            console.assert(TOGGLE_MODES.includes(value));
            toggleMode = value;
        }
    });

    return () => isGrouped(element, toggleMode);
};

/**
 * Initializes an instance of HTMLButtonElement as a toggle button, looking like MUI's ToggleButton.
 *
 * It invokes the function `initButtonBase(element, ...properties)`.
 *
 * The element gets the class 'toggleButton' by default; an `additionalClassName` property adds further classes. Its `errorClassName` defaults to
 * 'toggleButton-error' (the selected button, and its tint, are in the error color), and its `busyClassName` to 'toggleButton-busy'. While the value is
 * true, it has the class 'toggleButton-selected' and the attribute aria-pressed is 'true'.
 *
 * The element gets the following properties:
 *  - `value`: a boolean (it replaces the string 'value' of a button); the button is on if it is true, and off if it is false (the default). When it is on,
 *    the button has MUI's selected look (the color of the button and a tint of it as the background).
 *  - `toggleMode`: how the button affects its siblings (the other toggle buttons in the same parent element) when it gets selected:
 *     - 'independent': it does not affect any of them.
 *     - 'groupedByName': if it has a name (the button's standard `name` property), it unselects the siblings with the same name; if it has no name, it
 *       unselects the siblings that have no name (the ones with a name are not touched). It is the behavior of the radio buttons (see radioButton.js).
 *     - 'groupedByParent' (the default): if the parent is a toggle button group (see toggleButtonGroup.js), it acts as 'groupedByName'; otherwise, it acts
 *       as 'independent'.
 *    While the button is grouped (the mode is 'groupedByName', or it is 'groupedByParent' and the parent is a toggle button group), the user cannot
 *    unselect it: a click on the selected button does nothing, as with a radio button; selecting another button of the group unselects it, and
 *    the code can set its `value` to false. An independent button is switched on and off by clicks.
 *  - `displaySize`: 'small' (padding 7px, 13px font), 'medium' (the default; 11px, 14px) or 'large' (15px, 15px; MUI's sizes).
 *
 * Clicking the button toggles the value (or selects it, if it is grouped). This is a click listener, so an `onclick` property still works in addition to it.
 *
 * The event 'change' is dispatched (and bubbles) when the value changes, whether by the user or by the code, so `onchange` sets its handler. It is
 * dispatched for the button that gets selected and for the ones that are unselected by it.
 *
 * Inside a toggleButtonGroup (see toggleButtonGroup.js), the buttons have the look of the buttons of MUI's ToggleButtonGroup.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initToggleButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    toggleButtons.add(element);
    const isButtonGrouped = defineToggleButtonProperties(element);
    defineDisplaySizeProperty(element, 'toggleButton-small', 'toggleButton-large');
    element.addEventListener('click', () => { element.value = isButtonGrouped() ? true : !element.value; });
    element.setAttribute('aria-pressed', 'false');
    initButtonBase(element, { additionalClassName: 'toggleButton', errorClassName: 'toggleButton-error', busyClassName: 'toggleButton-busy' }, ...properties);
}

/**
 * Creates a toggle button.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const toggleButton = (...properties) => {
    const element = document.createElement('button');
    initToggleButton(element, ...properties);
    return element;
}
