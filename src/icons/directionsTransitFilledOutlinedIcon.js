import { initIcon } from "./icon.js";

//the url of the directions transit filled outlined svg; resolved relative to this module
const URL_DIRECTIONSTRANSITFILLEDOUTLINED = new URL('../../assets/icons/directionsTransitFilledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions transit filled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsTransitFilledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsTransitFilledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSTRANSITFILLEDOUTLINED }, ...properties);
}

/**
 * Creates a directions transit filled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsTransitFilledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsTransitFilledOutlinedIcon(element, ...properties);
    return element;
}
