import { initIcon } from "./icon.js";

//the url of the event outlined svg; resolved relative to this module
const URL_EVENTOUTLINED = new URL('../../assets/icons/eventOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an event outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eventOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEventOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EVENTOUTLINED }, ...properties);
}

/**
 * Creates an event outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eventOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEventOutlinedIcon(element, ...properties);
    return element;
}
