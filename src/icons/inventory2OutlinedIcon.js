import { initIcon } from "./icon.js";

//the url of the inventory2 outlined svg; resolved relative to this module
const URL_INVENTORY2OUTLINED = new URL('../../assets/icons/inventory2Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an inventory2 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/inventory2Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInventory2OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INVENTORY2OUTLINED }, ...properties);
}

/**
 * Creates an inventory2 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const inventory2OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInventory2OutlinedIcon(element, ...properties);
    return element;
}
