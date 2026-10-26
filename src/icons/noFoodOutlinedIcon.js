import { initIcon } from "./icon.js";

//the url of the no food outlined svg; resolved relative to this module
const URL_NOFOODOUTLINED = new URL('../../assets/icons/noFoodOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no food outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noFoodOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoFoodOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOFOODOUTLINED }, ...properties);
}

/**
 * Creates a no food outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noFoodOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoFoodOutlinedIcon(element, ...properties);
    return element;
}
