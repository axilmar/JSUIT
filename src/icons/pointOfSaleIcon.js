import { initIcon } from "./icon.js";

//the url of the point of sale svg; resolved relative to this module
const URL_POINTOFSALE = new URL('../../assets/icons/pointOfSale.svg', import.meta.url).href;

/**
 * Initializes an icon element as a point of sale icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pointOfSale.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPointOfSaleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_POINTOFSALE }, ...properties);
}

/**
 * Creates a point of sale icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pointOfSaleIcon = (...properties) => {
    const element = document.createElement('div');
    initPointOfSaleIcon(element, ...properties);
    return element;
}
