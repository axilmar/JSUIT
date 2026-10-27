import { initIcon } from "./icon.js";

//the url of the flag circle svg; resolved relative to this module
const URL_FLAGCIRCLE = new URL('../../assets/icons/flagCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flag circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flagCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlagCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flagCircleIcon', url: URL_FLAGCIRCLE }, ...properties);
}

/**
 * Creates a flag circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flagCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initFlagCircleIcon(element, ...properties);
    return element;
}
