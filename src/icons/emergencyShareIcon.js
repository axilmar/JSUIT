import { initIcon } from "./icon.js";

//the url of the emergency share svg; resolved relative to this module
const URL_EMERGENCYSHARE = new URL('../../assets/icons/emergencyShare.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emergency share icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emergencyShare.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmergencyShareIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'emergencyShareIcon', url: URL_EMERGENCYSHARE }, ...properties);
}

/**
 * Creates an emergency share icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emergencyShareIcon = (...properties) => {
    const element = document.createElement('div');
    initEmergencyShareIcon(element, ...properties);
    return element;
}
