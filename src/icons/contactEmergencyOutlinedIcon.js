import { initIcon } from "./icon.js";

//the url of the contact emergency outlined svg; resolved relative to this module
const URL_CONTACTEMERGENCYOUTLINED = new URL('../../assets/icons/contactEmergencyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contact emergency outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contactEmergencyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContactEmergencyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contactEmergencyOutlinedIcon', url: URL_CONTACTEMERGENCYOUTLINED }, ...properties);
}

/**
 * Creates a contact emergency outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contactEmergencyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initContactEmergencyOutlinedIcon(element, ...properties);
    return element;
}
