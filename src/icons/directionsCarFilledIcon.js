import { initIcon } from "./icon.js";

//the url of the directions car filled svg; resolved relative to this module
const URL_DIRECTIONSCARFILLED = new URL('../../assets/icons/directionsCarFilled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions car filled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsCarFilled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsCarFilledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'directionsCarFilledIcon', url: URL_DIRECTIONSCARFILLED }, ...properties);
}

/**
 * Creates a directions car filled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsCarFilledIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsCarFilledIcon(element, ...properties);
    return element;
}
