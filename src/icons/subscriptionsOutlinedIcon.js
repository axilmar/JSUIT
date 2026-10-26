import { initIcon } from "./icon.js";

//the url of the subscriptions outlined svg; resolved relative to this module
const URL_SUBSCRIPTIONSOUTLINED = new URL('../../assets/icons/subscriptionsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subscriptions outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subscriptionsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubscriptionsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUBSCRIPTIONSOUTLINED }, ...properties);
}

/**
 * Creates a subscriptions outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subscriptionsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSubscriptionsOutlinedIcon(element, ...properties);
    return element;
}
