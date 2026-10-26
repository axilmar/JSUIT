import { initIcon } from "./icon.js";

//the url of the egg outlined svg; resolved relative to this module
const URL_EGGOUTLINED = new URL('../../assets/icons/eggOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an egg outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eggOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEggOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EGGOUTLINED }, ...properties);
}

/**
 * Creates an egg outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eggOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEggOutlinedIcon(element, ...properties);
    return element;
}
