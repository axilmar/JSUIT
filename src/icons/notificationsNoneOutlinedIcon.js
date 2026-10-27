import { initIcon } from "./icon.js";

//the url of the notifications none outlined svg; resolved relative to this module
const URL_NOTIFICATIONSNONEOUTLINED = new URL('../../assets/icons/notificationsNoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notifications none outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notificationsNoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotificationsNoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notificationsNoneOutlinedIcon', url: URL_NOTIFICATIONSNONEOUTLINED }, ...properties);
}

/**
 * Creates a notifications none outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notificationsNoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNotificationsNoneOutlinedIcon(element, ...properties);
    return element;
}
