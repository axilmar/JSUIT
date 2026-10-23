import { initButtonBase } from "../html/buttonBase.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "../utility/utility.js";
import { icon as createIcon } from "./icon.js";

import iconButtonStyleSheet from './iconButton.css' with { type: 'css' };

adoptStyleSheet(iconButtonStyleSheet);

const ICON_CLASS = 'iconButton-icon';

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

/**
 * Initializes an instance of HTMLButtonElement as an icon button.
 * 
 * It invokes the function `initButtonBase(element, ...properties)`.
 * 
 * The element gets the class 'iconButton' by default; an `additionalClassName` property adds further classes.
 * Its `errorClassName` defaults to 'iconButton-error'.
 * Its `busyClassName` defaults to 'iconButton-busy'.
 * 
 * The button contains an internal icon element, and gets the following properties:
 *  - `displaySize`: 'small' (20px), 'medium' (24px, the default) or 'large' (35px), the sizes of MUI's icons; the icon always
 *    has the size of the button.
 *  - `icon`: returns or replaces the internal icon element.
 *  - `url`: returns or sets the url of the internal icon.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIconButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);

    const state = { icon: createIcon({ additionalClassName: ICON_CLASS, stretch: true }) };
    element.append(state.icon);

    defineIconProperty(element, state);
    defineUrlProperty(element);
    defineDisplaySizeProperty(element, 'iconButton-small', 'iconButton-large');
    initButtonBase(element, { additionalClassName: 'iconButton', errorClassName: 'iconButton-error', busyClassName: 'iconButton-busy' }, ...properties);
}

/**
 * Creates an icon button.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const iconButton = (...properties) => {
    const element = document.createElement('button');
    initIconButton(element, ...properties);
    return element;
}
