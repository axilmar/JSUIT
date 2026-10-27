import { initIcon } from "./icon.js";

//the url of the food bank svg; resolved relative to this module
const URL_FOODBANK = new URL('../../assets/icons/foodBank.svg', import.meta.url).href;

/**
 * Initializes an icon element as a food bank icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/foodBank.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFoodBankIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'foodBankIcon', url: URL_FOODBANK }, ...properties);
}

/**
 * Creates a food bank icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const foodBankIcon = (...properties) => {
    const element = document.createElement('div');
    initFoodBankIcon(element, ...properties);
    return element;
}
