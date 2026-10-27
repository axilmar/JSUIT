import { initIcon } from "./icon.js";

//the url of the all inbox svg; resolved relative to this module
const URL_ALLINBOX = new URL('../../assets/icons/allInbox.svg', import.meta.url).href;

/**
 * Initializes an icon element as an all inbox icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/allInbox.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAllInboxIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'allInboxIcon', url: URL_ALLINBOX }, ...properties);
}

/**
 * Creates an all inbox icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const allInboxIcon = (...properties) => {
    const element = document.createElement('div');
    initAllInboxIcon(element, ...properties);
    return element;
}
