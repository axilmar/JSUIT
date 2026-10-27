import { initIcon } from "./icon.js";

//the url of the directions run outlined svg; resolved relative to this module
const URL_DIRECTIONSRUNOUTLINED = new URL('../../assets/icons/directionsRunOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions run outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsRunOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsRunOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'directionsRunOutlinedIcon', url: URL_DIRECTIONSRUNOUTLINED }, ...properties);
}

/**
 * Creates a directions run outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsRunOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsRunOutlinedIcon(element, ...properties);
    return element;
}
