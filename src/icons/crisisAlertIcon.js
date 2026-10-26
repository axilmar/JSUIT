import { initIcon } from "./icon.js";

//the url of the crisis alert svg; resolved relative to this module
const URL_CRISISALERT = new URL('../../assets/icons/crisisAlert.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crisis alert icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/crisisAlert.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCrisisAlertIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CRISISALERT }, ...properties);
}

/**
 * Creates a crisis alert icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const crisisAlertIcon = (...properties) => {
    const element = document.createElement('div');
    initCrisisAlertIcon(element, ...properties);
    return element;
}
