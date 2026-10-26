import { initIcon } from "./icon.js";

//the url of the outlet svg; resolved relative to this module
const URL_OUTLET = new URL('../../assets/icons/outlet.svg', import.meta.url).href;

/**
 * Initializes an icon element as an outlet icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/outlet.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutletIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OUTLET }, ...properties);
}

/**
 * Creates an outlet icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const outletIcon = (...properties) => {
    const element = document.createElement('div');
    initOutletIcon(element, ...properties);
    return element;
}
