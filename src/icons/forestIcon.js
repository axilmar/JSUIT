import { initIcon } from "./icon.js";

//the url of the forest svg; resolved relative to this module
const URL_FOREST = new URL('../../assets/icons/forest.svg', import.meta.url).href;

/**
 * Initializes an icon element as a forest icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forest.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForestIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FOREST }, ...properties);
}

/**
 * Creates a forest icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forestIcon = (...properties) => {
    const element = document.createElement('div');
    initForestIcon(element, ...properties);
    return element;
}
