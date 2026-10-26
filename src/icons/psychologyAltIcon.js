import { initIcon } from "./icon.js";

//the url of the psychology alt svg; resolved relative to this module
const URL_PSYCHOLOGYALT = new URL('../../assets/icons/psychologyAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a psychology alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/psychologyAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPsychologyAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PSYCHOLOGYALT }, ...properties);
}

/**
 * Creates a psychology alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const psychologyAltIcon = (...properties) => {
    const element = document.createElement('div');
    initPsychologyAltIcon(element, ...properties);
    return element;
}
