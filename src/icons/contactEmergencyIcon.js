import { initIcon } from "./icon.js";

//the url of the contact emergency svg; resolved relative to this module
const URL_CONTACTEMERGENCY = new URL('../../assets/icons/contactEmergency.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contact emergency icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contactEmergency.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContactEmergencyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contactEmergencyIcon', url: URL_CONTACTEMERGENCY }, ...properties);
}

/**
 * Creates a contact emergency icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contactEmergencyIcon = (...properties) => {
    const element = document.createElement('div');
    initContactEmergencyIcon(element, ...properties);
    return element;
}
