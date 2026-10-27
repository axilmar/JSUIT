import { initIcon } from "./icon.js";

//the url of the notifications svg; resolved relative to this module
const URL_NOTIFICATIONS = new URL('../../assets/icons/notifications.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notifications icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notifications.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotificationsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notificationsIcon', url: URL_NOTIFICATIONS }, ...properties);
}

/**
 * Creates a notifications icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notificationsIcon = (...properties) => {
    const element = document.createElement('div');
    initNotificationsIcon(element, ...properties);
    return element;
}
