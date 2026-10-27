import { initIcon } from "./icon.js";

//the url of the psychology svg; resolved relative to this module
const URL_PSYCHOLOGY = new URL('../../assets/icons/psychology.svg', import.meta.url).href;

/**
 * Initializes an icon element as a psychology icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/psychology.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPsychologyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'psychologyIcon', url: URL_PSYCHOLOGY }, ...properties);
}

/**
 * Creates a psychology icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const psychologyIcon = (...properties) => {
    const element = document.createElement('div');
    initPsychologyIcon(element, ...properties);
    return element;
}
