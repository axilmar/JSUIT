import { initIcon } from "./icon.js";

//the url of the chair alt svg; resolved relative to this module
const URL_CHAIRALT = new URL('../../assets/icons/chairAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chair alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chairAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChairAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHAIRALT }, ...properties);
}

/**
 * Creates a chair alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chairAltIcon = (...properties) => {
    const element = document.createElement('div');
    initChairAltIcon(element, ...properties);
    return element;
}
