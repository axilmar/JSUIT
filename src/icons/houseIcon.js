import { initIcon } from "./icon.js";

//the url of the house svg; resolved relative to this module
const URL_HOUSE = new URL('../../assets/icons/house.svg', import.meta.url).href;

/**
 * Initializes an icon element as a house icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/house.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHouseIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOUSE }, ...properties);
}

/**
 * Creates a house icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const houseIcon = (...properties) => {
    const element = document.createElement('div');
    initHouseIcon(element, ...properties);
    return element;
}
