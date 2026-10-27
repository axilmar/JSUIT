import { initIcon } from "./icon.js";

//the url of the toys outlined svg; resolved relative to this module
const URL_TOYSOUTLINED = new URL('../../assets/icons/toysOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a toys outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/toysOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initToysOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'toysOutlinedIcon', url: URL_TOYSOUTLINED }, ...properties);
}

/**
 * Creates a toys outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const toysOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initToysOutlinedIcon(element, ...properties);
    return element;
}
