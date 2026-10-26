import { initIcon } from "./icon.js";

//the url of the alternate email svg; resolved relative to this module
const URL_ALTERNATEEMAIL = new URL('../../assets/icons/alternateEmail.svg', import.meta.url).href;

/**
 * Initializes an icon element as an alternate email icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alternateEmail.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlternateEmailIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALTERNATEEMAIL }, ...properties);
}

/**
 * Creates an alternate email icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alternateEmailIcon = (...properties) => {
    const element = document.createElement('div');
    initAlternateEmailIcon(element, ...properties);
    return element;
}
