import { initIcon } from "./icon.js";

//the url of the bolt svg; resolved relative to this module
const URL_BOLT = new URL('../../assets/icons/bolt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bolt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bolt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBoltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BOLT }, ...properties);
}

/**
 * Creates a bolt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const boltIcon = (...properties) => {
    const element = document.createElement('div');
    initBoltIcon(element, ...properties);
    return element;
}
