import { initIcon } from "./icon.js";

//the url of the directions railway filled svg; resolved relative to this module
const URL_DIRECTIONSRAILWAYFILLED = new URL('../../assets/icons/directionsRailwayFilled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions railway filled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsRailwayFilled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsRailwayFilledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'directionsRailwayFilledIcon', url: URL_DIRECTIONSRAILWAYFILLED }, ...properties);
}

/**
 * Creates a directions railway filled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsRailwayFilledIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsRailwayFilledIcon(element, ...properties);
    return element;
}
