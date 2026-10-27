import { initIcon } from "./icon.js";

//the url of the turn left svg; resolved relative to this module
const URL_TURNLEFT = new URL('../../assets/icons/turnLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turn left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'turnLeftIcon', url: URL_TURNLEFT }, ...properties);
}

/**
 * Creates a turn left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnLeftIcon(element, ...properties);
    return element;
}
