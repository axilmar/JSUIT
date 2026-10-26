import { initIcon } from "./icon.js";

//the url of the coffee svg; resolved relative to this module
const URL_COFFEE = new URL('../../assets/icons/coffee.svg', import.meta.url).href;

/**
 * Initializes an icon element as a coffee icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/coffee.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCoffeeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COFFEE }, ...properties);
}

/**
 * Creates a coffee icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const coffeeIcon = (...properties) => {
    const element = document.createElement('div');
    initCoffeeIcon(element, ...properties);
    return element;
}
