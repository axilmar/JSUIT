import { initIcon } from "./icon.js";

//the url of the table restaurant outlined svg; resolved relative to this module
const URL_TABLERESTAURANTOUTLINED = new URL('../../assets/icons/tableRestaurantOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a table restaurant outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tableRestaurantOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTableRestaurantOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tableRestaurantOutlinedIcon', url: URL_TABLERESTAURANTOUTLINED }, ...properties);
}

/**
 * Creates a table restaurant outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tableRestaurantOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTableRestaurantOutlinedIcon(element, ...properties);
    return element;
}
