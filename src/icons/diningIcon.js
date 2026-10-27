import { initIcon } from "./icon.js";

//the url of the dining svg; resolved relative to this module
const URL_DINING = new URL('../../assets/icons/dining.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dining icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dining.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDiningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'diningIcon', url: URL_DINING }, ...properties);
}

/**
 * Creates a dining icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const diningIcon = (...properties) => {
    const element = document.createElement('div');
    initDiningIcon(element, ...properties);
    return element;
}
