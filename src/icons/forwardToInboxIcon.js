import { initIcon } from "./icon.js";

//the url of the forward to inbox svg; resolved relative to this module
const URL_FORWARDTOINBOX = new URL('../../assets/icons/forwardToInbox.svg', import.meta.url).href;

/**
 * Initializes an icon element as a forward to inbox icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forwardToInbox.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForwardToInboxIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'forwardToInboxIcon', url: URL_FORWARDTOINBOX }, ...properties);
}

/**
 * Creates a forward to inbox icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forwardToInboxIcon = (...properties) => {
    const element = document.createElement('div');
    initForwardToInboxIcon(element, ...properties);
    return element;
}
