import { initIcon } from "./icon.js";

//the url of the pattern svg; resolved relative to this module
const URL_PATTERN = new URL('../../assets/icons/pattern.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pattern icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pattern.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPatternIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PATTERN }, ...properties);
}

/**
 * Creates a pattern icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const patternIcon = (...properties) => {
    const element = document.createElement('div');
    initPatternIcon(element, ...properties);
    return element;
}
