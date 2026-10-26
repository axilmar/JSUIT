import { initIcon } from "./icon.js";

//the url of the inventory outlined svg; resolved relative to this module
const URL_INVENTORYOUTLINED = new URL('../../assets/icons/inventoryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an inventory outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/inventoryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInventoryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INVENTORYOUTLINED }, ...properties);
}

/**
 * Creates an inventory outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const inventoryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInventoryOutlinedIcon(element, ...properties);
    return element;
}
