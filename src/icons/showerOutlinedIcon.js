import { initIcon } from "./icon.js";

//the url of the shower outlined svg; resolved relative to this module
const URL_SHOWEROUTLINED = new URL('../../assets/icons/showerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shower outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/showerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShowerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'showerOutlinedIcon', url: URL_SHOWEROUTLINED }, ...properties);
}

/**
 * Creates a shower outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const showerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShowerOutlinedIcon(element, ...properties);
    return element;
}
