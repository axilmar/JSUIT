import { initIcon } from "./icon.js";

//the url of the compare outlined svg; resolved relative to this module
const URL_COMPAREOUTLINED = new URL('../../assets/icons/compareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a compare outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/compareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCompareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'compareOutlinedIcon', url: URL_COMPAREOUTLINED }, ...properties);
}

/**
 * Creates a compare outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const compareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCompareOutlinedIcon(element, ...properties);
    return element;
}
