import { initIcon } from "./icon.js";

//the url of the move up svg; resolved relative to this module
const URL_MOVEUP = new URL('../../assets/icons/moveUp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a move up icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moveUp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoveUpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOVEUP }, ...properties);
}

/**
 * Creates a move up icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moveUpIcon = (...properties) => {
    const element = document.createElement('div');
    initMoveUpIcon(element, ...properties);
    return element;
}
