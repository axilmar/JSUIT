import { initIcon } from "./icon.js";

//the url of the rsvp outlined svg; resolved relative to this module
const URL_RSVPOUTLINED = new URL('../../assets/icons/rsvpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rsvp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rsvpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRsvpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RSVPOUTLINED }, ...properties);
}

/**
 * Creates a rsvp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rsvpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRsvpOutlinedIcon(element, ...properties);
    return element;
}
