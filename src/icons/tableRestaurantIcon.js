import { initIcon } from "./icon.js";

//the url of the table restaurant svg; resolved relative to this module
const URL_TABLERESTAURANT = new URL('../../assets/icons/tableRestaurant.svg', import.meta.url).href;

/**
 * Initializes an icon element as a table restaurant icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tableRestaurant.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTableRestaurantIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TABLERESTAURANT }, ...properties);
}

/**
 * Creates a table restaurant icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tableRestaurantIcon = (...properties) => {
    const element = document.createElement('div');
    initTableRestaurantIcon(element, ...properties);
    return element;
}
