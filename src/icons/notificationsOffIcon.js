import { initIcon } from "./icon.js";

//the url of the notifications off svg; resolved relative to this module
const URL_NOTIFICATIONSOFF = new URL('../../assets/icons/notificationsOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notifications off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notificationsOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotificationsOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notificationsOffIcon', url: URL_NOTIFICATIONSOFF }, ...properties);
}

/**
 * Creates a notifications off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notificationsOffIcon = (...properties) => {
    const element = document.createElement('div');
    initNotificationsOffIcon(element, ...properties);
    return element;
}
