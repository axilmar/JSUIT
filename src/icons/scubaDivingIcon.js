import { initIcon } from "./icon.js";

//the url of the scuba diving svg; resolved relative to this module
const URL_SCUBADIVING = new URL('../../assets/icons/scubaDiving.svg', import.meta.url).href;

/**
 * Initializes an icon element as a scuba diving icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/scubaDiving.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScubaDivingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCUBADIVING }, ...properties);
}

/**
 * Creates a scuba diving icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const scubaDivingIcon = (...properties) => {
    const element = document.createElement('div');
    initScubaDivingIcon(element, ...properties);
    return element;
}
