import { initIcon } from "./icon.js";

//the url of the pattern outlined svg; resolved relative to this module
const URL_PATTERNOUTLINED = new URL('../../assets/icons/patternOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pattern outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/patternOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPatternOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PATTERNOUTLINED }, ...properties);
}

/**
 * Creates a pattern outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const patternOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPatternOutlinedIcon(element, ...properties);
    return element;
}
