import { initDiv } from "./div.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "./utility.js";

import toggleButtonGroupStyleSheet from './toggleButtonGroup.css' with { type: 'css' };

adoptStyleSheet(toggleButtonGroupStyleSheet);

const ORIENTATIONS = ['horizontal', 'vertical'];        //the class of an orientation is 'toggleButtonGroup-' followed by its name

//defines the property 'orientation'
const defineOrientationProperty = (element) => {
    let orientation = 'horizontal';

    Object.defineProperty(element, 'orientation', {
        configurable: true,
        enumerable: true,
        get: () => orientation,
        set: (value) => {
            console.assert(ORIENTATIONS.includes(value));
            element.classList.remove(...ORIENTATIONS.map(name => 'toggleButtonGroup-' + name));
            element.classList.add('toggleButtonGroup-' + value);
            orientation = value;
        }
    });
};

/**
 * Initializes an instance of HTMLDivElement as a toggle button group, looking like MUI's ToggleButtonGroup.
 *
 * It invokes the function `initDiv(element, ...properties)`.
 *
 * The element gets the class 'toggleButtonGroup' by default, and the role 'group'; an `additionalClassName` property adds further classes.
 *
 * The group lays out its children (the toggle buttons, see toggleButton.js) in a row or in a column, and gives them the look of the buttons of MUI's
 * ToggleButtonGroup: they are joined, with a single line between neighbors, and only the outer corners of the group are round. The toggle buttons
 * of the group are grouped by their name by default (their `toggleMode` is 'groupedByParent'): selecting one unselects the siblings that have the same
 * name (or no name, if it has none), as in a MUI ToggleButtonGroup that is exclusive; set their `toggleMode` to 'independent' for a group in which any
 * number of buttons is selected.
 *
 * The element gets the following properties:
 *  - `orientation`: 'horizontal' (the default), for a row, or 'vertical', for a column. The element has the class 'toggleButtonGroup-' and the orientation.
 *  - `displaySize`: 'small', 'medium' (the default) or 'large': the size of the toggle buttons of the group (MUI's sizes; see toggleButton.js); it
 *    overrides the `displaySize` that the buttons have.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initToggleButtonGroup = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    defineOrientationProperty(element);
    defineDisplaySizeProperty(element, 'toggleButtonGroup-small', 'toggleButtonGroup-large');
    element.setAttribute('role', 'group');
    element.orientation = 'horizontal';
    initDiv(element, { additionalClassName: 'toggleButtonGroup' }, ...properties);
}

/**
 * Creates a toggle button group.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const toggleButtonGroup = (...properties) => {
    const element = document.createElement('div');
    initToggleButtonGroup(element, ...properties);
    return element;
}
