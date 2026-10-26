import { initIcon } from "./icon.js";

//the url of the directions walk svg; resolved relative to this module
const URL_DIRECTIONSWALK = new URL('../../assets/icons/directionsWalk.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions walk icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsWalk.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsWalkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSWALK }, ...properties);
}

/**
 * Creates a directions walk icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsWalkIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsWalkIcon(element, ...properties);
    return element;
}
