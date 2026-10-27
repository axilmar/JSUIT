import { initIcon } from "./icon.js";

//the url of the gamepad svg; resolved relative to this module
const URL_GAMEPAD = new URL('../../assets/icons/gamepad.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gamepad icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gamepad.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGamepadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gamepadIcon', url: URL_GAMEPAD }, ...properties);
}

/**
 * Creates a gamepad icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gamepadIcon = (...properties) => {
    const element = document.createElement('div');
    initGamepadIcon(element, ...properties);
    return element;
}
