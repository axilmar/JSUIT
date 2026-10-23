import { initDiv } from "../html/div.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "../utility/utility.js";

import avatarStyleSheet from './avatar.css' with { type: 'css' };

adoptStyleSheet(avatarStyleSheet);

const VARIANTS = ['circular', 'rounded', 'square'];     //the class of a variant is 'avatar-' followed by its name, except for the circular one, which has none

//defines the property 'variant'
const defineVariantProperty = (element) => {
    let variant = 'circular';

    Object.defineProperty(element, 'variant', {
        configurable: true,
        enumerable: true,
        get: () => variant,
        set: (value) => {
            console.assert(VARIANTS.includes(value));
            element.classList.remove('avatar-rounded', 'avatar-square');
            if (value === 'rounded' || value === 'square') {
                element.classList.add('avatar-' + value);
            }
            variant = value;
        }
    });
};

/**
 * Initializes an instance of HTMLDivElement as an avatar, looking like MUI's Avatar.
 *
 * It invokes the function `initDiv(element, ...properties)`.
 *
 * The element gets the class 'avatar' by default; an `additionalClassName` property adds further classes. Its content (an image, text,
 * an icon) is visible only through the shape of the avatar: whatever is outside of it is clipped. The colors are the css properties
 * `--avatar-background` (default MUI's grey) and `--avatar-color` (the text color, default white).
 *
 * The element gets the following properties:
 *  - `variant`: 'circular' (the default), 'rounded' (rounded corners) or 'square'; it is the shape of the mask.
 *  - `displaySize`: 'small' (32px), 'medium' (40px, the default, as MUI's avatar) or 'large' (56px).
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAvatar = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    defineVariantProperty(element);
    defineDisplaySizeProperty(element, 'avatar-small', 'avatar-large');
    initDiv(element, { additionalClassName: 'avatar' }, ...properties);
}

/**
 * Creates an avatar.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const avatar = (...properties) => {
    const element = document.createElement('div');
    initAvatar(element, ...properties);
    return element;
}
