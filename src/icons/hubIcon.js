import { initIcon } from "./icon.js";

//the url of the hub svg; resolved relative to this module
const URL_HUB = new URL('../../assets/icons/hub.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hub icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hub.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHubIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hubIcon', url: URL_HUB }, ...properties);
}

/**
 * Creates a hub icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hubIcon = (...properties) => {
    const element = document.createElement('div');
    initHubIcon(element, ...properties);
    return element;
}
