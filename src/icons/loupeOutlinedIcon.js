import { initIcon } from "./icon.js";

//the url of the loupe outlined svg; resolved relative to this module
const URL_LOUPEOUTLINED = new URL('../../assets/icons/loupeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a loupe outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/loupeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLoupeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOUPEOUTLINED }, ...properties);
}

/**
 * Creates a loupe outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const loupeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLoupeOutlinedIcon(element, ...properties);
    return element;
}
