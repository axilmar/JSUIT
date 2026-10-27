import { initIcon } from "./icon.js";

//the url of the notifications off outlined svg; resolved relative to this module
const URL_NOTIFICATIONSOFFOUTLINED = new URL('../../assets/icons/notificationsOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a notifications off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/notificationsOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNotificationsOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'notificationsOffOutlinedIcon', url: URL_NOTIFICATIONSOFFOUTLINED }, ...properties);
}

/**
 * Creates a notifications off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const notificationsOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNotificationsOffOutlinedIcon(element, ...properties);
    return element;
}
