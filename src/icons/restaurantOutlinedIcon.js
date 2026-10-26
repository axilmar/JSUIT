import { initIcon } from "./icon.js";

//the url of the restaurant outlined svg; resolved relative to this module
const URL_RESTAURANTOUTLINED = new URL('../../assets/icons/restaurantOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a restaurant outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/restaurantOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRestaurantOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RESTAURANTOUTLINED }, ...properties);
}

/**
 * Creates a restaurant outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const restaurantOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRestaurantOutlinedIcon(element, ...properties);
    return element;
}
