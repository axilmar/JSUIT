import { initIcon } from "./icon.js";

//the url of the nature people svg; resolved relative to this module
const URL_NATUREPEOPLE = new URL('../../assets/icons/naturePeople.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nature people icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/naturePeople.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNaturePeopleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NATUREPEOPLE }, ...properties);
}

/**
 * Creates a nature people icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const naturePeopleIcon = (...properties) => {
    const element = document.createElement('div');
    initNaturePeopleIcon(element, ...properties);
    return element;
}
