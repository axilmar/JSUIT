import { initIcon } from "./icon.js";

//the url of the event busy outlined svg; resolved relative to this module
const URL_EVENTBUSYOUTLINED = new URL('../../assets/icons/eventBusyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an event busy outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eventBusyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEventBusyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eventBusyOutlinedIcon', url: URL_EVENTBUSYOUTLINED }, ...properties);
}

/**
 * Creates an event busy outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eventBusyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEventBusyOutlinedIcon(element, ...properties);
    return element;
}
