import { initIcon } from "./icon.js";

//the url of the sim card svg; resolved relative to this module
const URL_SIMCARD = new URL('../../assets/icons/simCard.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sim card icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/simCard.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSimCardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIMCARD }, ...properties);
}

/**
 * Creates a sim card icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const simCardIcon = (...properties) => {
    const element = document.createElement('div');
    initSimCardIcon(element, ...properties);
    return element;
}
