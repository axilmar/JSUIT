import { initIcon } from "./icon.js";

//the url of the traffic svg; resolved relative to this module
const URL_TRAFFIC = new URL('../../assets/icons/traffic.svg', import.meta.url).href;

/**
 * Initializes an icon element as a traffic icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/traffic.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTrafficIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRAFFIC }, ...properties);
}

/**
 * Creates a traffic icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const trafficIcon = (...properties) => {
    const element = document.createElement('div');
    initTrafficIcon(element, ...properties);
    return element;
}
