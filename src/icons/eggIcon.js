import { initIcon } from "./icon.js";

//the url of the egg svg; resolved relative to this module
const URL_EGG = new URL('../../assets/icons/egg.svg', import.meta.url).href;

/**
 * Initializes an icon element as an egg icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/egg.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEggIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eggIcon', url: URL_EGG }, ...properties);
}

/**
 * Creates an egg icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eggIcon = (...properties) => {
    const element = document.createElement('div');
    initEggIcon(element, ...properties);
    return element;
}
