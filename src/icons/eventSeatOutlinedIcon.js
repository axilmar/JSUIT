import { initIcon } from "./icon.js";

//the url of the event seat outlined svg; resolved relative to this module
const URL_EVENTSEATOUTLINED = new URL('../../assets/icons/eventSeatOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an event seat outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eventSeatOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEventSeatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eventSeatOutlinedIcon', url: URL_EVENTSEATOUTLINED }, ...properties);
}

/**
 * Creates an event seat outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eventSeatOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEventSeatOutlinedIcon(element, ...properties);
    return element;
}
