import { initIcon } from "./icon.js";

//the url of the gamepad outlined svg; resolved relative to this module
const URL_GAMEPADOUTLINED = new URL('../../assets/icons/gamepadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gamepad outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gamepadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGamepadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gamepadOutlinedIcon', url: URL_GAMEPADOUTLINED }, ...properties);
}

/**
 * Creates a gamepad outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gamepadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGamepadOutlinedIcon(element, ...properties);
    return element;
}
