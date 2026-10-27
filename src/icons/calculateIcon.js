import { initIcon } from "./icon.js";

//the url of the calculate svg; resolved relative to this module
const URL_CALCULATE = new URL('../../assets/icons/calculate.svg', import.meta.url).href;

/**
 * Initializes an icon element as a calculate icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/calculate.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCalculateIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'calculateIcon', url: URL_CALCULATE }, ...properties);
}

/**
 * Creates a calculate icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const calculateIcon = (...properties) => {
    const element = document.createElement('div');
    initCalculateIcon(element, ...properties);
    return element;
}
