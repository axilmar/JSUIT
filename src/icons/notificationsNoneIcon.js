import { initIcon } from "./icon.js";

//the url of the notifications none svg; resolved relative to this module
const URL_NOTIFICATIONSNONE = new URL('../../assets/icons/notificationsNone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notifications none icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notificationsNone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotificationsNoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notificationsNoneIcon', url: URL_NOTIFICATIONSNONE }, ...properties);
}

/**
 * Creates a notifications none icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notificationsNoneIcon = (...properties) => {
    const element = document.createElement('div');
    initNotificationsNoneIcon(element, ...properties);
    return element;
}
