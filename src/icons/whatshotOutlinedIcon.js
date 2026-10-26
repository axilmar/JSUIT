import { initIcon } from "./icon.js";

//the url of the whatshot outlined svg; resolved relative to this module
const URL_WHATSHOTOUTLINED = new URL('../../assets/icons/whatshotOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a whatshot outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/whatshotOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWhatshotOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WHATSHOTOUTLINED }, ...properties);
}

/**
 * Creates a whatshot outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const whatshotOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWhatshotOutlinedIcon(element, ...properties);
    return element;
}
