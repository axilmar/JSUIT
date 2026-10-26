import { initIcon } from "./icon.js";

//the url of the three k plus svg; resolved relative to this module
const URL_THREEKPLUS = new URL('../../assets/icons/threeKPlus.svg', import.meta.url).href;

/**
 * Initializes an icon element as a three k plus icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/threeKPlus.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThreeKPlusIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THREEKPLUS }, ...properties);
}

/**
 * Creates a three k plus icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const threeKPlusIcon = (...properties) => {
    const element = document.createElement('div');
    initThreeKPlusIcon(element, ...properties);
    return element;
}
