import { initIcon } from "./icon.js";

//the url of the expand svg; resolved relative to this module
const URL_EXPAND = new URL('../../assets/icons/expand.svg', import.meta.url).href;

/**
 * Initializes an icon element as an expand icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/expand.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExpandIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXPAND }, ...properties);
}

/**
 * Creates an expand icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const expandIcon = (...properties) => {
    const element = document.createElement('div');
    initExpandIcon(element, ...properties);
    return element;
}
