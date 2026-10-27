import { initIcon } from "./icon.js";

//the url of the notifications paused outlined svg; resolved relative to this module
const URL_NOTIFICATIONSPAUSEDOUTLINED = new URL('../../assets/icons/notificationsPausedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notifications paused outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notificationsPausedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotificationsPausedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notificationsPausedOutlinedIcon', url: URL_NOTIFICATIONSPAUSEDOUTLINED }, ...properties);
}

/**
 * Creates a notifications paused outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notificationsPausedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNotificationsPausedOutlinedIcon(element, ...properties);
    return element;
}
