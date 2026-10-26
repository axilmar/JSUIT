import { initIcon } from "./icon.js";

//the url of the commute svg; resolved relative to this module
const URL_COMMUTE = new URL('../../assets/icons/commute.svg', import.meta.url).href;

/**
 * Initializes an icon element as a commute icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/commute.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCommuteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COMMUTE }, ...properties);
}

/**
 * Creates a commute icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const commuteIcon = (...properties) => {
    const element = document.createElement('div');
    initCommuteIcon(element, ...properties);
    return element;
}
