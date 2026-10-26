import { initIcon } from "./icon.js";

//the url of the coffee maker svg; resolved relative to this module
const URL_COFFEEMAKER = new URL('../../assets/icons/coffeeMaker.svg', import.meta.url).href;

/**
 * Initializes an icon element as a coffee maker icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/coffeeMaker.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCoffeeMakerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COFFEEMAKER }, ...properties);
}

/**
 * Creates a coffee maker icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const coffeeMakerIcon = (...properties) => {
    const element = document.createElement('div');
    initCoffeeMakerIcon(element, ...properties);
    return element;
}
