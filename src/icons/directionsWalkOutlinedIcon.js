import { initIcon } from "./icon.js";

//the url of the directions walk outlined svg; resolved relative to this module
const URL_DIRECTIONSWALKOUTLINED = new URL('../../assets/icons/directionsWalkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions walk outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsWalkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsWalkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'directionsWalkOutlinedIcon', url: URL_DIRECTIONSWALKOUTLINED }, ...properties);
}

/**
 * Creates a directions walk outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsWalkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsWalkOutlinedIcon(element, ...properties);
    return element;
}
