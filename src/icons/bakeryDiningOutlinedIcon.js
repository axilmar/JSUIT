import { initIcon } from "./icon.js";

//the url of the bakery dining outlined svg; resolved relative to this module
const URL_BAKERYDININGOUTLINED = new URL('../../assets/icons/bakeryDiningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bakery dining outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bakeryDiningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBakeryDiningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BAKERYDININGOUTLINED }, ...properties);
}

/**
 * Creates a bakery dining outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bakeryDiningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBakeryDiningOutlinedIcon(element, ...properties);
    return element;
}
