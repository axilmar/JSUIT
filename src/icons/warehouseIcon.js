import { initIcon } from "./icon.js";

//the url of the warehouse svg; resolved relative to this module
const URL_WAREHOUSE = new URL('../../assets/icons/warehouse.svg', import.meta.url).href;

/**
 * Initializes an icon element as a warehouse icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/warehouse.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWarehouseIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WAREHOUSE }, ...properties);
}

/**
 * Creates a warehouse icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const warehouseIcon = (...properties) => {
    const element = document.createElement('div');
    initWarehouseIcon(element, ...properties);
    return element;
}
