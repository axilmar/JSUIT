import { initIcon } from "./icon.js";

//the url of the restaurant menu outlined svg; resolved relative to this module
const URL_RESTAURANTMENUOUTLINED = new URL('../../assets/icons/restaurantMenuOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a restaurant menu outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/restaurantMenuOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRestaurantMenuOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RESTAURANTMENUOUTLINED }, ...properties);
}

/**
 * Creates a restaurant menu outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const restaurantMenuOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRestaurantMenuOutlinedIcon(element, ...properties);
    return element;
}
