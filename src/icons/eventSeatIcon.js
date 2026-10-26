import { initIcon } from "./icon.js";

//the url of the event seat svg; resolved relative to this module
const URL_EVENTSEAT = new URL('../../assets/icons/eventSeat.svg', import.meta.url).href;

/**
 * Initializes an icon element as an event seat icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eventSeat.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEventSeatIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EVENTSEAT }, ...properties);
}

/**
 * Creates an event seat icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eventSeatIcon = (...properties) => {
    const element = document.createElement('div');
    initEventSeatIcon(element, ...properties);
    return element;
}
