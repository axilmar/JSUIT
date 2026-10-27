import { initIcon } from "./icon.js";

//the url of the coffee outlined svg; resolved relative to this module
const URL_COFFEEOUTLINED = new URL('../../assets/icons/coffeeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a coffee outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/coffeeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCoffeeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'coffeeOutlinedIcon', url: URL_COFFEEOUTLINED }, ...properties);
}

/**
 * Creates a coffee outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const coffeeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCoffeeOutlinedIcon(element, ...properties);
    return element;
}
