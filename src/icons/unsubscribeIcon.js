import { initIcon } from "./icon.js";

//the url of the unsubscribe svg; resolved relative to this module
const URL_UNSUBSCRIBE = new URL('../../assets/icons/unsubscribe.svg', import.meta.url).href;

/**
 * Initializes an icon element as an unsubscribe icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/unsubscribe.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUnsubscribeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'unsubscribeIcon', url: URL_UNSUBSCRIBE }, ...properties);
}

/**
 * Creates an unsubscribe icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const unsubscribeIcon = (...properties) => {
    const element = document.createElement('div');
    initUnsubscribeIcon(element, ...properties);
    return element;
}
