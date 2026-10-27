import { initIcon } from "./icon.js";

//the url of the block svg; resolved relative to this module
const URL_BLOCK = new URL('../../assets/icons/block.svg', import.meta.url).href;

/**
 * Initializes an icon element as a block icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/block.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlockIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'blockIcon', url: URL_BLOCK }, ...properties);
}

/**
 * Creates a block icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blockIcon = (...properties) => {
    const element = document.createElement('div');
    initBlockIcon(element, ...properties);
    return element;
}
