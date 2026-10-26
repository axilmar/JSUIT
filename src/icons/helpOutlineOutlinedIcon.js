import { initIcon } from "./icon.js";

//the url of the help outline outlined svg; resolved relative to this module
const URL_HELPOUTLINEOUTLINED = new URL('../../assets/icons/helpOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a help outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/helpOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHelpOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HELPOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a help outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const helpOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHelpOutlineOutlinedIcon(element, ...properties);
    return element;
}
