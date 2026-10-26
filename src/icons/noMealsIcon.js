import { initIcon } from "./icon.js";

//the url of the no meals svg; resolved relative to this module
const URL_NOMEALS = new URL('../../assets/icons/noMeals.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no meals icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noMeals.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoMealsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOMEALS }, ...properties);
}

/**
 * Creates a no meals icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noMealsIcon = (...properties) => {
    const element = document.createElement('div');
    initNoMealsIcon(element, ...properties);
    return element;
}
