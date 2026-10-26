import { initIcon } from "./icon.js";

//the url of the liquor svg; resolved relative to this module
const URL_LIQUOR = new URL('../../assets/icons/liquor.svg', import.meta.url).href;

/**
 * Initializes an icon element as a liquor icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/liquor.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLiquorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LIQUOR }, ...properties);
}

/**
 * Creates a liquor icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const liquorIcon = (...properties) => {
    const element = document.createElement('div');
    initLiquorIcon(element, ...properties);
    return element;
}
