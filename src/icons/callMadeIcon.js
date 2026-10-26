import { initIcon } from "./icon.js";

//the url of the call made svg; resolved relative to this module
const URL_CALLMADE = new URL('../../assets/icons/callMade.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call made icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callMade.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallMadeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CALLMADE }, ...properties);
}

/**
 * Creates a call made icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callMadeIcon = (...properties) => {
    const element = document.createElement('div');
    initCallMadeIcon(element, ...properties);
    return element;
}
