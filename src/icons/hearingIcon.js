import { initIcon } from "./icon.js";

//the url of the hearing svg; resolved relative to this module
const URL_HEARING = new URL('../../assets/icons/hearing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hearing icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hearing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHearingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HEARING }, ...properties);
}

/**
 * Creates a hearing icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hearingIcon = (...properties) => {
    const element = document.createElement('div');
    initHearingIcon(element, ...properties);
    return element;
}
