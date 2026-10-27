import { initIcon } from "./icon.js";

//the url of the not interested svg; resolved relative to this module
const URL_NOTINTERESTED = new URL('../../assets/icons/notInterested.svg', import.meta.url).href;

/**
 * Initializes an icon element as a not interested icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notInterested.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotInterestedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notInterestedIcon', url: URL_NOTINTERESTED }, ...properties);
}

/**
 * Creates a not interested icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notInterestedIcon = (...properties) => {
    const element = document.createElement('div');
    initNotInterestedIcon(element, ...properties);
    return element;
}
