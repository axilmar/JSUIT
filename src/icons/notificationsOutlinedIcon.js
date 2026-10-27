import { initIcon } from "./icon.js";

//the url of the notifications outlined svg; resolved relative to this module
const URL_NOTIFICATIONSOUTLINED = new URL('../../assets/icons/notificationsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notifications outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notificationsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotificationsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notificationsOutlinedIcon', url: URL_NOTIFICATIONSOUTLINED }, ...properties);
}

/**
 * Creates a notifications outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notificationsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNotificationsOutlinedIcon(element, ...properties);
    return element;
}
