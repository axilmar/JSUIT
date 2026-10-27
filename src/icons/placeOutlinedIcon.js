import { initIcon } from "./icon.js";

//the url of the place outlined svg; resolved relative to this module
const URL_PLACEOUTLINED = new URL('../../assets/icons/placeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a place outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/placeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlaceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'placeOutlinedIcon', url: URL_PLACEOUTLINED }, ...properties);
}

/**
 * Creates a place outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const placeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlaceOutlinedIcon(element, ...properties);
    return element;
}
