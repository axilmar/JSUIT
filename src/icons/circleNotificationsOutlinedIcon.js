import { initIcon } from "./icon.js";

//the url of the circle notifications outlined svg; resolved relative to this module
const URL_CIRCLENOTIFICATIONSOUTLINED = new URL('../../assets/icons/circleNotificationsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a circle notifications outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/circleNotificationsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCircleNotificationsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CIRCLENOTIFICATIONSOUTLINED }, ...properties);
}

/**
 * Creates a circle notifications outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const circleNotificationsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCircleNotificationsOutlinedIcon(element, ...properties);
    return element;
}
