import { initIcon } from "./icon.js";

//the url of the volunteer activism svg; resolved relative to this module
const URL_VOLUNTEERACTIVISM = new URL('../../assets/icons/volunteerActivism.svg', import.meta.url).href;

/**
 * Initializes an icon element as a volunteer activism icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/volunteerActivism.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVolunteerActivismIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VOLUNTEERACTIVISM }, ...properties);
}

/**
 * Creates a volunteer activism icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const volunteerActivismIcon = (...properties) => {
    const element = document.createElement('div');
    initVolunteerActivismIcon(element, ...properties);
    return element;
}
