import { initIcon } from "./icon.js";

//the url of the notification important outlined svg; resolved relative to this module
const URL_NOTIFICATIONIMPORTANTOUTLINED = new URL('../../assets/icons/notificationImportantOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notification important outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notificationImportantOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotificationImportantOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notificationImportantOutlinedIcon', url: URL_NOTIFICATIONIMPORTANTOUTLINED }, ...properties);
}

/**
 * Creates a notification important outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notificationImportantOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNotificationImportantOutlinedIcon(element, ...properties);
    return element;
}
