import { initButtonBase } from "./buttonBase.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "./utility.js";
import { icon as createIcon } from "./icon.js";

import floatingActionButtonStyleSheet from './floatingActionButton.css' with { type: 'css' };

adoptStyleSheet(floatingActionButtonStyleSheet);

const ICON_CLASS = 'floatingActionButton-icon';
const EXTENDED_CLASS = 'floatingActionButton-extended';

//defines the property 'icon'; the icon is held in the given state object
const defineIconProperty = (element, state) => {
    Object.defineProperty(element, 'icon', {
        configurable: true,
        enumerable: true,
        get: () => state.icon,
        set: (newIcon) => {
            console.assert(newIcon instanceof HTMLDivElement);
            if (newIcon === state.icon) {
                return;
            }
            newIcon.classList.add(ICON_CLASS);
            newIcon.stretch = true;
            state.icon.replaceWith(newIcon);
            state.icon = newIcon;
        }
    });
};

//defines the property 'url', which forwards to the internal icon
const defineUrlProperty = (element) => {
    Object.defineProperty(element, 'url', {
        configurable: true,
        enumerable: true,
        get: () => element.icon.url,
        set: (url) => { element.icon.url = url; }
    });
};

//defines the property 'extended': if true, the button is a pill that can hold a label after the icon
const defineExtendedProperty = (element) => {
    Object.defineProperty(element, 'extended', {
        configurable: true,
        enumerable: true,
        get: () => element.classList.contains(EXTENDED_CLASS),
        set: (value) => { element.classList.toggle(EXTENDED_CLASS, !!value); }
    });
};

/**
 * Initializes an instance of HTMLButtonElement as a floating action button (MUI's Fab).
 *
 * It invokes the function `initButtonBase(element, ...properties)`.
 *
 * The element gets the class 'floatingActionButton' by default; an `additionalClassName` property adds further classes
 * (e.g. 'floatingActionButton-primary', see floatingActionButton.css for the color classes).
 * Its `errorClassName` defaults to 'floatingActionButton-error'.
 * Its `busyClassName` defaults to 'floatingActionButton-busy'.
 *
 * The button contains an internal icon element, and gets the following properties:
 *  - `icon`: returns or replaces the internal icon element.
 *  - `url`: returns or sets the url of the internal icon.
 *  - `displaySize`: 'small' (40px), 'medium' (48px, the default) or 'large' (56px), the sizes of MUI's Fab; the extended fab
 *    has the heights 34px, 40px and 48px respectively.
 *  - `extended`: if true, the button is an extended fab; text appended after the icon is the label.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFloatingActionButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);

    const state = { icon: createIcon({ additionalClassName: ICON_CLASS, stretch: true }) };
    element.append(state.icon);

    defineIconProperty(element, state);
    defineUrlProperty(element);
    defineDisplaySizeProperty(element, 'floatingActionButton-small', 'floatingActionButton-large');
    defineExtendedProperty(element);
    initButtonBase(element, { additionalClassName: 'floatingActionButton', errorClassName: 'floatingActionButton-error', busyClassName: 'floatingActionButton-busy' }, ...properties);
}

/**
 * Creates a floating action button.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const floatingActionButton = (...properties) => {
    const element = document.createElement('button');
    initFloatingActionButton(element, ...properties);
    return element;
}
