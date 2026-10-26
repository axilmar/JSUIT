import { initIcon } from "./icon.js";

//the url of the line style svg; resolved relative to this module
const URL_LINESTYLE = new URL('../../assets/icons/lineStyle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a line style icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lineStyle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLineStyleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LINESTYLE }, ...properties);
}

/**
 * Creates a line style icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lineStyleIcon = (...properties) => {
    const element = document.createElement('div');
    initLineStyleIcon(element, ...properties);
    return element;
}
