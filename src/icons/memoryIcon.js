import { initIcon } from "./icon.js";

//the url of the memory svg; resolved relative to this module
const URL_MEMORY = new URL('../../assets/icons/memory.svg', import.meta.url).href;

/**
 * Initializes an icon element as a memory icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/memory.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMemoryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'memoryIcon', url: URL_MEMORY }, ...properties);
}

/**
 * Creates a memory icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const memoryIcon = (...properties) => {
    const element = document.createElement('div');
    initMemoryIcon(element, ...properties);
    return element;
}
