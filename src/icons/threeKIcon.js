import { initIcon } from "./icon.js";

//the url of the three k svg; resolved relative to this module
const URL_THREEK = new URL('../../assets/icons/threeK.svg', import.meta.url).href;

/**
 * Initializes an icon element as a three k icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/threeK.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThreeKIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THREEK }, ...properties);
}

/**
 * Creates a three k icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const threeKIcon = (...properties) => {
    const element = document.createElement('div');
    initThreeKIcon(element, ...properties);
    return element;
}
