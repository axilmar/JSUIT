import { initIcon } from "./icon.js";

//the url of the inventory2 svg; resolved relative to this module
const URL_INVENTORY2 = new URL('../../assets/icons/inventory2.svg', import.meta.url).href;

/**
 * Initializes an icon element as an inventory2 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/inventory2.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInventory2Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'inventory2Icon', url: URL_INVENTORY2 }, ...properties);
}

/**
 * Creates an inventory2 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const inventory2Icon = (...properties) => {
    const element = document.createElement('div');
    initInventory2Icon(element, ...properties);
    return element;
}
