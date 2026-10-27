import { initIcon } from "./icon.js";

//the url of the no food svg; resolved relative to this module
const URL_NOFOOD = new URL('../../assets/icons/noFood.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no food icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noFood.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoFoodIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noFoodIcon', url: URL_NOFOOD }, ...properties);
}

/**
 * Creates a no food icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noFoodIcon = (...properties) => {
    const element = document.createElement('div');
    initNoFoodIcon(element, ...properties);
    return element;
}
