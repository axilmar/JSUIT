import { initIcon } from "./icon.js";

//the url of the abc outlined svg; resolved relative to this module
const URL_ABCOUTLINED = new URL('../../assets/icons/abcOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an abc outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/abcOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAbcOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ABCOUTLINED }, ...properties);
}

/**
 * Creates an abc outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const abcOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAbcOutlinedIcon(element, ...properties);
    return element;
}
