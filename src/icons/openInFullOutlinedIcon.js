import { initIcon } from "./icon.js";

//the url of the open in full outlined svg; resolved relative to this module
const URL_OPENINFULLOUTLINED = new URL('../../assets/icons/openInFullOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an open in full outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/openInFullOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOpenInFullOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OPENINFULLOUTLINED }, ...properties);
}

/**
 * Creates an open in full outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const openInFullOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOpenInFullOutlinedIcon(element, ...properties);
    return element;
}
