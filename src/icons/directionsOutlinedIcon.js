import { initIcon } from "./icon.js";

//the url of the directions outlined svg; resolved relative to this module
const URL_DIRECTIONSOUTLINED = new URL('../../assets/icons/directionsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'directionsOutlinedIcon', url: URL_DIRECTIONSOUTLINED }, ...properties);
}

/**
 * Creates a directions outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsOutlinedIcon(element, ...properties);
    return element;
}
