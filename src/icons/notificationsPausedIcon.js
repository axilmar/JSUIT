import { initIcon } from "./icon.js";

//the url of the notifications paused svg; resolved relative to this module
const URL_NOTIFICATIONSPAUSED = new URL('../../assets/icons/notificationsPaused.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notifications paused icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notificationsPaused.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotificationsPausedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOTIFICATIONSPAUSED }, ...properties);
}

/**
 * Creates a notifications paused icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notificationsPausedIcon = (...properties) => {
    const element = document.createElement('div');
    initNotificationsPausedIcon(element, ...properties);
    return element;
}
