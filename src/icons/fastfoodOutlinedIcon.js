import { initIcon } from "./icon.js";

//the url of the fastfood outlined svg; resolved relative to this module
const URL_FASTFOODOUTLINED = new URL('../../assets/icons/fastfoodOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fastfood outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fastfoodOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFastfoodOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FASTFOODOUTLINED }, ...properties);
}

/**
 * Creates a fastfood outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fastfoodOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFastfoodOutlinedIcon(element, ...properties);
    return element;
}
