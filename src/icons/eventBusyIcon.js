import { initIcon } from "./icon.js";

//the url of the event busy svg; resolved relative to this module
const URL_EVENTBUSY = new URL('../../assets/icons/eventBusy.svg', import.meta.url).href;

/**
 * Initializes an icon element as an event busy icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eventBusy.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEventBusyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eventBusyIcon', url: URL_EVENTBUSY }, ...properties);
}

/**
 * Creates an event busy icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eventBusyIcon = (...properties) => {
    const element = document.createElement('div');
    initEventBusyIcon(element, ...properties);
    return element;
}
