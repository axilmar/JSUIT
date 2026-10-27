import { initIcon } from "./icon.js";

//the url of the warehouse outlined svg; resolved relative to this module
const URL_WAREHOUSEOUTLINED = new URL('../../assets/icons/warehouseOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a warehouse outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/warehouseOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWarehouseOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'warehouseOutlinedIcon', url: URL_WAREHOUSEOUTLINED }, ...properties);
}

/**
 * Creates a warehouse outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const warehouseOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWarehouseOutlinedIcon(element, ...properties);
    return element;
}
