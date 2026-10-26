import { initIcon } from "./icon.js";

//the url of the restaurant svg; resolved relative to this module
const URL_RESTAURANT = new URL('../../assets/icons/restaurant.svg', import.meta.url).href;

/**
 * Initializes an icon element as a restaurant icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/restaurant.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRestaurantIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RESTAURANT }, ...properties);
}

/**
 * Creates a restaurant icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const restaurantIcon = (...properties) => {
    const element = document.createElement('div');
    initRestaurantIcon(element, ...properties);
    return element;
}
