import { initIcon } from "./icon.js";

//the url of the wb incandescent svg; resolved relative to this module
const URL_WBINCANDESCENT = new URL('../../assets/icons/wbIncandescent.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb incandescent icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbIncandescent.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbIncandescentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WBINCANDESCENT }, ...properties);
}

/**
 * Creates a wb incandescent icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbIncandescentIcon = (...properties) => {
    const element = document.createElement('div');
    initWbIncandescentIcon(element, ...properties);
    return element;
}
