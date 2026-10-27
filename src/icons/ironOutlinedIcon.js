import { initIcon } from "./icon.js";

//the url of the iron outlined svg; resolved relative to this module
const URL_IRONOUTLINED = new URL('../../assets/icons/ironOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an iron outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ironOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIronOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'ironOutlinedIcon', url: URL_IRONOUTLINED }, ...properties);
}

/**
 * Creates an iron outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ironOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initIronOutlinedIcon(element, ...properties);
    return element;
}
