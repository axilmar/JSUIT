import { initIcon } from "./icon.js";

//the url of the emergency svg; resolved relative to this module
const URL_EMERGENCY = new URL('../../assets/icons/emergency.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emergency icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emergency.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmergencyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EMERGENCY }, ...properties);
}

/**
 * Creates an emergency icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emergencyIcon = (...properties) => {
    const element = document.createElement('div');
    initEmergencyIcon(element, ...properties);
    return element;
}
