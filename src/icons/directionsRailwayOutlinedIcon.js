import { initIcon } from "./icon.js";

//the url of the directions railway outlined svg; resolved relative to this module
const URL_DIRECTIONSRAILWAYOUTLINED = new URL('../../assets/icons/directionsRailwayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions railway outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsRailwayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsRailwayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'directionsRailwayOutlinedIcon', url: URL_DIRECTIONSRAILWAYOUTLINED }, ...properties);
}

/**
 * Creates a directions railway outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsRailwayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsRailwayOutlinedIcon(element, ...properties);
    return element;
}
