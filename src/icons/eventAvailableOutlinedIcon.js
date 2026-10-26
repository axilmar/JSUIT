import { initIcon } from "./icon.js";

//the url of the event available outlined svg; resolved relative to this module
const URL_EVENTAVAILABLEOUTLINED = new URL('../../assets/icons/eventAvailableOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an event available outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eventAvailableOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEventAvailableOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EVENTAVAILABLEOUTLINED }, ...properties);
}

/**
 * Creates an event available outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eventAvailableOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEventAvailableOutlinedIcon(element, ...properties);
    return element;
}
