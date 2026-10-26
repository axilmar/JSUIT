import { initIcon } from "./icon.js";

//the url of the no backpack svg; resolved relative to this module
const URL_NOBACKPACK = new URL('../../assets/icons/noBackpack.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no backpack icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noBackpack.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoBackpackIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOBACKPACK }, ...properties);
}

/**
 * Creates a no backpack icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noBackpackIcon = (...properties) => {
    const element = document.createElement('div');
    initNoBackpackIcon(element, ...properties);
    return element;
}
