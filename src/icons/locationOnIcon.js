import { initIcon } from "./icon.js";

//the url of the location on svg; resolved relative to this module
const URL_LOCATIONON = new URL('../../assets/icons/locationOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a location on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/locationOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocationOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCATIONON }, ...properties);
}

/**
 * Creates a location on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const locationOnIcon = (...properties) => {
    const element = document.createElement('div');
    initLocationOnIcon(element, ...properties);
    return element;
}
