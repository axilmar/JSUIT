import { initIcon } from "./icon.js";

//the url of the breakfast dining svg; resolved relative to this module
const URL_BREAKFASTDINING = new URL('../../assets/icons/breakfastDining.svg', import.meta.url).href;

/**
 * Initializes an icon element as a breakfast dining icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/breakfastDining.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBreakfastDiningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BREAKFASTDINING }, ...properties);
}

/**
 * Creates a breakfast dining icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const breakfastDiningIcon = (...properties) => {
    const element = document.createElement('div');
    initBreakfastDiningIcon(element, ...properties);
    return element;
}
