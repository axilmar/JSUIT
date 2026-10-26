import { initIcon } from "./icon.js";

//the url of the rsvp svg; resolved relative to this module
const URL_RSVP = new URL('../../assets/icons/rsvp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rsvp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rsvp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRsvpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RSVP }, ...properties);
}

/**
 * Creates a rsvp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rsvpIcon = (...properties) => {
    const element = document.createElement('div');
    initRsvpIcon(element, ...properties);
    return element;
}
