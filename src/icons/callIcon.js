import { initIcon } from "./icon.js";

//the url of the call svg; resolved relative to this module
const URL_CALL = new URL('../../assets/icons/call.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/call.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'callIcon', url: URL_CALL }, ...properties);
}

/**
 * Creates a call icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callIcon = (...properties) => {
    const element = document.createElement('div');
    initCallIcon(element, ...properties);
    return element;
}
