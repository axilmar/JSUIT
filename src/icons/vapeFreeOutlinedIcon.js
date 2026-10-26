import { initIcon } from "./icon.js";

//the url of the vape free outlined svg; resolved relative to this module
const URL_VAPEFREEOUTLINED = new URL('../../assets/icons/vapeFreeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vape free outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vapeFreeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVapeFreeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VAPEFREEOUTLINED }, ...properties);
}

/**
 * Creates a vape free outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vapeFreeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVapeFreeOutlinedIcon(element, ...properties);
    return element;
}
