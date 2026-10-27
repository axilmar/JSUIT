import { initIcon } from "./icon.js";

//the url of the diamond svg; resolved relative to this module
const URL_DIAMOND = new URL('../../assets/icons/diamond.svg', import.meta.url).href;

/**
 * Initializes an icon element as a diamond icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/diamond.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDiamondIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'diamondIcon', url: URL_DIAMOND }, ...properties);
}

/**
 * Creates a diamond icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const diamondIcon = (...properties) => {
    const element = document.createElement('div');
    initDiamondIcon(element, ...properties);
    return element;
}
