import { initIcon } from "./icon.js";

//the url of the eight k plus outlined svg; resolved relative to this module
const URL_EIGHTKPLUSOUTLINED = new URL('../../assets/icons/eightKPlusOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eight k plus outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eightKPlusOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEightKPlusOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eightKPlusOutlinedIcon', url: URL_EIGHTKPLUSOUTLINED }, ...properties);
}

/**
 * Creates an eight k plus outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eightKPlusOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEightKPlusOutlinedIcon(element, ...properties);
    return element;
}
