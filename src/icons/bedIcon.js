import { initIcon } from "./icon.js";

//the url of the bed svg; resolved relative to this module
const URL_BED = new URL('../../assets/icons/bed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bedIcon', url: URL_BED }, ...properties);
}

/**
 * Creates a bed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bedIcon = (...properties) => {
    const element = document.createElement('div');
    initBedIcon(element, ...properties);
    return element;
}
