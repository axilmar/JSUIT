import { initIcon } from "./icon.js";

//the url of the flood outlined svg; resolved relative to this module
const URL_FLOODOUTLINED = new URL('../../assets/icons/floodOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flood outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/floodOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFloodOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'floodOutlinedIcon', url: URL_FLOODOUTLINED }, ...properties);
}

/**
 * Creates a flood outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const floodOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFloodOutlinedIcon(element, ...properties);
    return element;
}
