import { initIcon } from "./icon.js";

//the url of the directions subway svg; resolved relative to this module
const URL_DIRECTIONSSUBWAY = new URL('../../assets/icons/directionsSubway.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions subway icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsSubway.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsSubwayIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSSUBWAY }, ...properties);
}

/**
 * Creates a directions subway icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsSubwayIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsSubwayIcon(element, ...properties);
    return element;
}
