import { initIcon } from "./icon.js";

//the url of the numbers outlined svg; resolved relative to this module
const URL_NUMBERSOUTLINED = new URL('../../assets/icons/numbersOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a numbers outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/numbersOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNumbersOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'numbersOutlinedIcon', url: URL_NUMBERSOUTLINED }, ...properties);
}

/**
 * Creates a numbers outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const numbersOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNumbersOutlinedIcon(element, ...properties);
    return element;
}
