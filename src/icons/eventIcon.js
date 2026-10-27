import { initIcon } from "./icon.js";

//the url of the event svg; resolved relative to this module
const URL_EVENT = new URL('../../assets/icons/event.svg', import.meta.url).href;

/**
 * Initializes an icon element as an event icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/event.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEventIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eventIcon', url: URL_EVENT }, ...properties);
}

/**
 * Creates an event icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eventIcon = (...properties) => {
    const element = document.createElement('div');
    initEventIcon(element, ...properties);
    return element;
}
