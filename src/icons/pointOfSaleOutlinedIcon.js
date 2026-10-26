import { initIcon } from "./icon.js";

//the url of the point of sale outlined svg; resolved relative to this module
const URL_POINTOFSALEOUTLINED = new URL('../../assets/icons/pointOfSaleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a point of sale outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pointOfSaleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPointOfSaleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_POINTOFSALEOUTLINED }, ...properties);
}

/**
 * Creates a point of sale outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pointOfSaleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPointOfSaleOutlinedIcon(element, ...properties);
    return element;
}
