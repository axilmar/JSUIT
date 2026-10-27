import { initIcon } from "./icon.js";

//the url of the circle notifications svg; resolved relative to this module
const URL_CIRCLENOTIFICATIONS = new URL('../../assets/icons/circleNotifications.svg', import.meta.url).href;

/**
 * Initializes an icon element as a circle notifications icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/circleNotifications.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCircleNotificationsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'circleNotificationsIcon', url: URL_CIRCLENOTIFICATIONS }, ...properties);
}

/**
 * Creates a circle notifications icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const circleNotificationsIcon = (...properties) => {
    const element = document.createElement('div');
    initCircleNotificationsIcon(element, ...properties);
    return element;
}
