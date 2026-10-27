import { initIcon } from "./icon.js";

//the url of the pix outlined svg; resolved relative to this module
const URL_PIXOUTLINED = new URL('../../assets/icons/pixOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pix outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pixOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPixOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pixOutlinedIcon', url: URL_PIXOUTLINED }, ...properties);
}

/**
 * Creates a pix outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pixOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPixOutlinedIcon(element, ...properties);
    return element;
}
