import { initIcon } from "./icon.js";

//the url of the call end svg; resolved relative to this module
const URL_CALLEND = new URL('../../assets/icons/callEnd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call end icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callEnd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallEndIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'callEndIcon', url: URL_CALLEND }, ...properties);
}

/**
 * Creates a call end icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callEndIcon = (...properties) => {
    const element = document.createElement('div');
    initCallEndIcon(element, ...properties);
    return element;
}
