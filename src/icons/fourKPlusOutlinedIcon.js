import { initIcon } from "./icon.js";

//the url of the four k plus outlined svg; resolved relative to this module
const URL_FOURKPLUSOUTLINED = new URL('../../assets/icons/fourKPlusOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a four k plus outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fourKPlusOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFourKPlusOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FOURKPLUSOUTLINED }, ...properties);
}

/**
 * Creates a four k plus outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fourKPlusOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFourKPlusOutlinedIcon(element, ...properties);
    return element;
}
