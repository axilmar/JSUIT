import { initIcon } from "./icon.js";

//the url of the emergency outlined svg; resolved relative to this module
const URL_EMERGENCYOUTLINED = new URL('../../assets/icons/emergencyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emergency outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emergencyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmergencyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'emergencyOutlinedIcon', url: URL_EMERGENCYOUTLINED }, ...properties);
}

/**
 * Creates an emergency outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emergencyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEmergencyOutlinedIcon(element, ...properties);
    return element;
}
