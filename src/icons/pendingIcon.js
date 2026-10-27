import { initIcon } from "./icon.js";

//the url of the pending svg; resolved relative to this module
const URL_PENDING = new URL('../../assets/icons/pending.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pending icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pending.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPendingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pendingIcon', url: URL_PENDING }, ...properties);
}

/**
 * Creates a pending icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pendingIcon = (...properties) => {
    const element = document.createElement('div');
    initPendingIcon(element, ...properties);
    return element;
}
