import { initIcon } from "./icon.js";

//the url of the call received svg; resolved relative to this module
const URL_CALLRECEIVED = new URL('../../assets/icons/callReceived.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call received icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callReceived.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallReceivedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'callReceivedIcon', url: URL_CALLRECEIVED }, ...properties);
}

/**
 * Creates a call received icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callReceivedIcon = (...properties) => {
    const element = document.createElement('div');
    initCallReceivedIcon(element, ...properties);
    return element;
}
