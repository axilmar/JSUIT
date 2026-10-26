import { initIcon } from "./icon.js";

//the url of the turn right svg; resolved relative to this module
const URL_TURNRIGHT = new URL('../../assets/icons/turnRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turn right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TURNRIGHT }, ...properties);
}

/**
 * Creates a turn right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnRightIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnRightIcon(element, ...properties);
    return element;
}
