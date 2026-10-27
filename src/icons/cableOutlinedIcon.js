import { initIcon } from "./icon.js";

//the url of the cable outlined svg; resolved relative to this module
const URL_CABLEOUTLINED = new URL('../../assets/icons/cableOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cable outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cableOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCableOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cableOutlinedIcon', url: URL_CABLEOUTLINED }, ...properties);
}

/**
 * Creates a cable outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cableOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCableOutlinedIcon(element, ...properties);
    return element;
}
