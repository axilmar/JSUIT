import { initIcon } from "./icon.js";

//the url of the house siding svg; resolved relative to this module
const URL_HOUSESIDING = new URL('../../assets/icons/houseSiding.svg', import.meta.url).href;

/**
 * Initializes an icon element as a house siding icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/houseSiding.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHouseSidingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HOUSESIDING }, ...properties);
}

/**
 * Creates a house siding icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const houseSidingIcon = (...properties) => {
    const element = document.createElement('div');
    initHouseSidingIcon(element, ...properties);
    return element;
}
