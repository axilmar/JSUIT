import { initIcon } from "./icon.js";

//the url of the notification add outlined svg; resolved relative to this module
const URL_NOTIFICATIONADDOUTLINED = new URL('../../assets/icons/notificationAddOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notification add outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notificationAddOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotificationAddOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notificationAddOutlinedIcon', url: URL_NOTIFICATIONADDOUTLINED }, ...properties);
}

/**
 * Creates a notification add outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notificationAddOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNotificationAddOutlinedIcon(element, ...properties);
    return element;
}
