import { initIcon } from "./icon.js";

//the url of the nordic walking svg; resolved relative to this module
const URL_NORDICWALKING = new URL('../../assets/icons/nordicWalking.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nordic walking icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nordicWalking.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNordicWalkingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nordicWalkingIcon', url: URL_NORDICWALKING }, ...properties);
}

/**
 * Creates a nordic walking icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nordicWalkingIcon = (...properties) => {
    const element = document.createElement('div');
    initNordicWalkingIcon(element, ...properties);
    return element;
}
