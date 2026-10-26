import { initIcon } from "./icon.js";

//the url of the no stroller svg; resolved relative to this module
const URL_NOSTROLLER = new URL('../../assets/icons/noStroller.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no stroller icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noStroller.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoStrollerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOSTROLLER }, ...properties);
}

/**
 * Creates a no stroller icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noStrollerIcon = (...properties) => {
    const element = document.createElement('div');
    initNoStrollerIcon(element, ...properties);
    return element;
}
