import { initIcon } from "./icon.js";

//the url of the door sliding svg; resolved relative to this module
const URL_DOORSLIDING = new URL('../../assets/icons/doorSliding.svg', import.meta.url).href;

/**
 * Initializes an icon element as a door sliding icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doorSliding.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoorSlidingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOORSLIDING }, ...properties);
}

/**
 * Creates a door sliding icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doorSlidingIcon = (...properties) => {
    const element = document.createElement('div');
    initDoorSlidingIcon(element, ...properties);
    return element;
}
