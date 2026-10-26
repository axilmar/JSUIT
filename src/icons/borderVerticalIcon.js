import { initIcon } from "./icon.js";

//the url of the border vertical svg; resolved relative to this module
const URL_BORDERVERTICAL = new URL('../../assets/icons/borderVertical.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border vertical icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderVertical.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderVerticalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BORDERVERTICAL }, ...properties);
}

/**
 * Creates a border vertical icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderVerticalIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderVerticalIcon(element, ...properties);
    return element;
}
