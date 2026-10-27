import { initIcon } from "./icon.js";

//the url of the subscriptions svg; resolved relative to this module
const URL_SUBSCRIPTIONS = new URL('../../assets/icons/subscriptions.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subscriptions icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subscriptions.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubscriptionsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'subscriptionsIcon', url: URL_SUBSCRIPTIONS }, ...properties);
}

/**
 * Creates a subscriptions icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subscriptionsIcon = (...properties) => {
    const element = document.createElement('div');
    initSubscriptionsIcon(element, ...properties);
    return element;
}
