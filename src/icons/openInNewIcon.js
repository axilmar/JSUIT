import { initIcon } from "./icon.js";

//the url of the open in new svg; resolved relative to this module
const URL_OPENINNEW = new URL('../../assets/icons/openInNew.svg', import.meta.url).href;

/**
 * Initializes an icon element as an open in new icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/openInNew.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOpenInNewIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OPENINNEW }, ...properties);
}

/**
 * Creates an open in new icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const openInNewIcon = (...properties) => {
    const element = document.createElement('div');
    initOpenInNewIcon(element, ...properties);
    return element;
}
