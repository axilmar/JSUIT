import { initIcon } from "./icon.js";

//the url of the restaurant menu svg; resolved relative to this module
const URL_RESTAURANTMENU = new URL('../../assets/icons/restaurantMenu.svg', import.meta.url).href;

/**
 * Initializes an icon element as a restaurant menu icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/restaurantMenu.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRestaurantMenuIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'restaurantMenuIcon', url: URL_RESTAURANTMENU }, ...properties);
}

/**
 * Creates a restaurant menu icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const restaurantMenuIcon = (...properties) => {
    const element = document.createElement('div');
    initRestaurantMenuIcon(element, ...properties);
    return element;
}
