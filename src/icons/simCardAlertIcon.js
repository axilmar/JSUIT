import { initIcon } from "./icon.js";

//the url of the sim card alert svg; resolved relative to this module
const URL_SIMCARDALERT = new URL('../../assets/icons/simCardAlert.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sim card alert icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/simCardAlert.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSimCardAlertIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIMCARDALERT }, ...properties);
}

/**
 * Creates a sim card alert icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const simCardAlertIcon = (...properties) => {
    const element = document.createElement('div');
    initSimCardAlertIcon(element, ...properties);
    return element;
}
