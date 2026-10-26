import { initIcon } from "./icon.js";

//the url of the fastfood svg; resolved relative to this module
const URL_FASTFOOD = new URL('../../assets/icons/fastfood.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fastfood icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fastfood.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFastfoodIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FASTFOOD }, ...properties);
}

/**
 * Creates a fastfood icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fastfoodIcon = (...properties) => {
    const element = document.createElement('div');
    initFastfoodIcon(element, ...properties);
    return element;
}
