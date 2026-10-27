import { initIcon } from "./icon.js";

//the url of the backpack svg; resolved relative to this module
const URL_BACKPACK = new URL('../../assets/icons/backpack.svg', import.meta.url).href;

/**
 * Initializes an icon element as a backpack icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/backpack.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBackpackIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'backpackIcon', url: URL_BACKPACK }, ...properties);
}

/**
 * Creates a backpack icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const backpackIcon = (...properties) => {
    const element = document.createElement('div');
    initBackpackIcon(element, ...properties);
    return element;
}
