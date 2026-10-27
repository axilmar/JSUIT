import { initIcon } from "./icon.js";

//the url of the pending outlined svg; resolved relative to this module
const URL_PENDINGOUTLINED = new URL('../../assets/icons/pendingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pending outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pendingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPendingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pendingOutlinedIcon', url: URL_PENDINGOUTLINED }, ...properties);
}

/**
 * Creates a pending outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pendingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPendingOutlinedIcon(element, ...properties);
    return element;
}
