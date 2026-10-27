import { initIcon } from "./icon.js";

//the url of the egg alt svg; resolved relative to this module
const URL_EGGALT = new URL('../../assets/icons/eggAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as an egg alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eggAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEggAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eggAltIcon', url: URL_EGGALT }, ...properties);
}

/**
 * Creates an egg alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eggAltIcon = (...properties) => {
    const element = document.createElement('div');
    initEggAltIcon(element, ...properties);
    return element;
}
