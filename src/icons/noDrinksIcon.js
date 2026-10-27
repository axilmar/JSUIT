import { initIcon } from "./icon.js";

//the url of the no drinks svg; resolved relative to this module
const URL_NODRINKS = new URL('../../assets/icons/noDrinks.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no drinks icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noDrinks.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoDrinksIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noDrinksIcon', url: URL_NODRINKS }, ...properties);
}

/**
 * Creates a no drinks icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noDrinksIcon = (...properties) => {
    const element = document.createElement('div');
    initNoDrinksIcon(element, ...properties);
    return element;
}
