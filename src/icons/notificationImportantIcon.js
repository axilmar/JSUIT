import { initIcon } from "./icon.js";

//the url of the notification important svg; resolved relative to this module
const URL_NOTIFICATIONIMPORTANT = new URL('../../assets/icons/notificationImportant.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notification important icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notificationImportant.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotificationImportantIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notificationImportantIcon', url: URL_NOTIFICATIONIMPORTANT }, ...properties);
}

/**
 * Creates a notification important icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notificationImportantIcon = (...properties) => {
    const element = document.createElement('div');
    initNotificationImportantIcon(element, ...properties);
    return element;
}
