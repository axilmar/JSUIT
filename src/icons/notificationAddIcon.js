import { initIcon } from "./icon.js";

//the url of the notification add svg; resolved relative to this module
const URL_NOTIFICATIONADD = new URL('../../assets/icons/notificationAdd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notification add icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notificationAdd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotificationAddIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOTIFICATIONADD }, ...properties);
}

/**
 * Creates a notification add icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notificationAddIcon = (...properties) => {
    const element = document.createElement('div');
    initNotificationAddIcon(element, ...properties);
    return element;
}
