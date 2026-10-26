import { initIcon } from "./icon.js";

//the url of the railway alert svg; resolved relative to this module
const URL_RAILWAYALERT = new URL('../../assets/icons/railwayAlert.svg', import.meta.url).href;

/**
 * Initializes an icon element as a railway alert icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/railwayAlert.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRailwayAlertIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RAILWAYALERT }, ...properties);
}

/**
 * Creates a railway alert icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const railwayAlertIcon = (...properties) => {
    const element = document.createElement('div');
    initRailwayAlertIcon(element, ...properties);
    return element;
}
