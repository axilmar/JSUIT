import { initIcon } from "./icon.js";

//the url of the fiber new outlined svg; resolved relative to this module
const URL_FIBERNEWOUTLINED = new URL('../../assets/icons/fiberNewOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fiber new outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fiberNewOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFiberNewOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIBERNEWOUTLINED }, ...properties);
}

/**
 * Creates a fiber new outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fiberNewOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFiberNewOutlinedIcon(element, ...properties);
    return element;
}
