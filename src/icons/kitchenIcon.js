import { initIcon } from "./icon.js";

//the url of the kitchen svg; resolved relative to this module
const URL_KITCHEN = new URL('../../assets/icons/kitchen.svg', import.meta.url).href;

/**
 * Initializes an icon element as a kitchen icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/kitchen.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKitchenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'kitchenIcon', url: URL_KITCHEN }, ...properties);
}

/**
 * Creates a kitchen icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const kitchenIcon = (...properties) => {
    const element = document.createElement('div');
    initKitchenIcon(element, ...properties);
    return element;
}
