import { initIcon } from "./icon.js";

//the url of the event available svg; resolved relative to this module
const URL_EVENTAVAILABLE = new URL('../../assets/icons/eventAvailable.svg', import.meta.url).href;

/**
 * Initializes an icon element as an event available icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eventAvailable.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEventAvailableIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EVENTAVAILABLE }, ...properties);
}

/**
 * Creates an event available icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eventAvailableIcon = (...properties) => {
    const element = document.createElement('div');
    initEventAvailableIcon(element, ...properties);
    return element;
}
