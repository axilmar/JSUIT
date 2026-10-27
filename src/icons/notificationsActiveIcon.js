import { initIcon } from "./icon.js";

//the url of the notifications active svg; resolved relative to this module
const URL_NOTIFICATIONSACTIVE = new URL('../../assets/icons/notificationsActive.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notifications active icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notificationsActive.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotificationsActiveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notificationsActiveIcon', url: URL_NOTIFICATIONSACTIVE }, ...properties);
}

/**
 * Creates a notifications active icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notificationsActiveIcon = (...properties) => {
    const element = document.createElement('div');
    initNotificationsActiveIcon(element, ...properties);
    return element;
}
