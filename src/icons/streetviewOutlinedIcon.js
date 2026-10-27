import { initIcon } from "./icon.js";

//the url of the streetview outlined svg; resolved relative to this module
const URL_STREETVIEWOUTLINED = new URL('../../assets/icons/streetviewOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a streetview outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/streetviewOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStreetviewOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'streetviewOutlinedIcon', url: URL_STREETVIEWOUTLINED }, ...properties);
}

/**
 * Creates a streetview outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const streetviewOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStreetviewOutlinedIcon(element, ...properties);
    return element;
}
