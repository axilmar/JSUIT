import { initIcon } from "./icon.js";

//the url of the door front svg; resolved relative to this module
const URL_DOORFRONT = new URL('../../assets/icons/doorFront.svg', import.meta.url).href;

/**
 * Initializes an icon element as a door front icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doorFront.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoorFrontIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOORFRONT }, ...properties);
}

/**
 * Creates a door front icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doorFrontIcon = (...properties) => {
    const element = document.createElement('div');
    initDoorFrontIcon(element, ...properties);
    return element;
}
