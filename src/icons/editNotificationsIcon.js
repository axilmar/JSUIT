import { initIcon } from "./icon.js";

//the url of the edit notifications svg; resolved relative to this module
const URL_EDITNOTIFICATIONS = new URL('../../assets/icons/editNotifications.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit notifications icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editNotifications.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditNotificationsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EDITNOTIFICATIONS }, ...properties);
}

/**
 * Creates an edit notifications icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editNotificationsIcon = (...properties) => {
    const element = document.createElement('div');
    initEditNotificationsIcon(element, ...properties);
    return element;
}
