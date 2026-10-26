import { initIcon } from "./icon.js";

//the url of the pool outlined svg; resolved relative to this module
const URL_POOLOUTLINED = new URL('../../assets/icons/poolOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pool outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/poolOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPoolOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_POOLOUTLINED }, ...properties);
}

/**
 * Creates a pool outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const poolOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPoolOutlinedIcon(element, ...properties);
    return element;
}
