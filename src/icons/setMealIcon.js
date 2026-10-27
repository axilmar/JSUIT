import { initIcon } from "./icon.js";

//the url of the set meal svg; resolved relative to this module
const URL_SETMEAL = new URL('../../assets/icons/setMeal.svg', import.meta.url).href;

/**
 * Initializes an icon element as a set meal icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/setMeal.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSetMealIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'setMealIcon', url: URL_SETMEAL }, ...properties);
}

/**
 * Creates a set meal icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const setMealIcon = (...properties) => {
    const element = document.createElement('div');
    initSetMealIcon(element, ...properties);
    return element;
}
