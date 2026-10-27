import { initIcon } from "./icon.js";

//the url of the directions transit filled svg; resolved relative to this module
const URL_DIRECTIONSTRANSITFILLED = new URL('../../assets/icons/directionsTransitFilled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions transit filled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsTransitFilled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsTransitFilledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'directionsTransitFilledIcon', url: URL_DIRECTIONSTRANSITFILLED }, ...properties);
}

/**
 * Creates a directions transit filled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsTransitFilledIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsTransitFilledIcon(element, ...properties);
    return element;
}
