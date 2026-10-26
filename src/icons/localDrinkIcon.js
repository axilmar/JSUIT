import { initIcon } from "./icon.js";

//the url of the local drink svg; resolved relative to this module
const URL_LOCALDRINK = new URL('../../assets/icons/localDrink.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local drink icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localDrink.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalDrinkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALDRINK }, ...properties);
}

/**
 * Creates a local drink icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localDrinkIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalDrinkIcon(element, ...properties);
    return element;
}
