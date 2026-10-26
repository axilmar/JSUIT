import { initIcon } from "./icon.js";

//the url of the beenhere svg; resolved relative to this module
const URL_BEENHERE = new URL('../../assets/icons/beenhere.svg', import.meta.url).href;

/**
 * Initializes an icon element as a beenhere icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/beenhere.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBeenhereIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BEENHERE }, ...properties);
}

/**
 * Creates a beenhere icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const beenhereIcon = (...properties) => {
    const element = document.createElement('div');
    initBeenhereIcon(element, ...properties);
    return element;
}
