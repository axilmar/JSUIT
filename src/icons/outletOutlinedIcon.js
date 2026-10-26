import { initIcon } from "./icon.js";

//the url of the outlet outlined svg; resolved relative to this module
const URL_OUTLETOUTLINED = new URL('../../assets/icons/outletOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an outlet outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/outletOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutletOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OUTLETOUTLINED }, ...properties);
}

/**
 * Creates an outlet outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const outletOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOutletOutlinedIcon(element, ...properties);
    return element;
}
