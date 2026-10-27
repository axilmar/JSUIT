import { initIcon } from "./icon.js";

//the url of the single bed svg; resolved relative to this module
const URL_SINGLEBED = new URL('../../assets/icons/singleBed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a single bed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/singleBed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSingleBedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'singleBedIcon', url: URL_SINGLEBED }, ...properties);
}

/**
 * Creates a single bed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const singleBedIcon = (...properties) => {
    const element = document.createElement('div');
    initSingleBedIcon(element, ...properties);
    return element;
}
