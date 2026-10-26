import { initIcon } from "./icon.js";

//the url of the add alert svg; resolved relative to this module
const URL_ADDALERT = new URL('../../assets/icons/addAlert.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add alert icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addAlert.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddAlertIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDALERT }, ...properties);
}

/**
 * Creates an add alert icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addAlertIcon = (...properties) => {
    const element = document.createElement('div');
    initAddAlertIcon(element, ...properties);
    return element;
}
