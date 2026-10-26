import { initIcon } from "./icon.js";

//the url of the door back svg; resolved relative to this module
const URL_DOORBACK = new URL('../../assets/icons/doorBack.svg', import.meta.url).href;

/**
 * Initializes an icon element as a door back icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doorBack.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoorBackIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOORBACK }, ...properties);
}

/**
 * Creates a door back icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doorBackIcon = (...properties) => {
    const element = document.createElement('div');
    initDoorBackIcon(element, ...properties);
    return element;
}
