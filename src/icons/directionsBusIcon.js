import { initIcon } from "./icon.js";

//the url of the directions bus svg; resolved relative to this module
const URL_DIRECTIONSBUS = new URL('../../assets/icons/directionsBus.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions bus icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsBus.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsBusIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'directionsBusIcon', url: URL_DIRECTIONSBUS }, ...properties);
}

/**
 * Creates a directions bus icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsBusIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsBusIcon(element, ...properties);
    return element;
}
