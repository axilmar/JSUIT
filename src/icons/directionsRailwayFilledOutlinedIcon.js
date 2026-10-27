import { initIcon } from "./icon.js";

//the url of the directions railway filled outlined svg; resolved relative to this module
const URL_DIRECTIONSRAILWAYFILLEDOUTLINED = new URL('../../assets/icons/directionsRailwayFilledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions railway filled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsRailwayFilledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsRailwayFilledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'directionsRailwayFilledOutlinedIcon', url: URL_DIRECTIONSRAILWAYFILLEDOUTLINED }, ...properties);
}

/**
 * Creates a directions railway filled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsRailwayFilledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsRailwayFilledOutlinedIcon(element, ...properties);
    return element;
}
