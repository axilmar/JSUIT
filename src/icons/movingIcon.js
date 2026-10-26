import { initIcon } from "./icon.js";

//the url of the moving svg; resolved relative to this module
const URL_MOVING = new URL('../../assets/icons/moving.svg', import.meta.url).href;

/**
 * Initializes an icon element as a moving icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moving.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMovingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOVING }, ...properties);
}

/**
 * Creates a moving icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const movingIcon = (...properties) => {
    const element = document.createElement('div');
    initMovingIcon(element, ...properties);
    return element;
}
