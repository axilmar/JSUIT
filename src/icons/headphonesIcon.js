import { initIcon } from "./icon.js";

//the url of the headphones svg; resolved relative to this module
const URL_HEADPHONES = new URL('../../assets/icons/headphones.svg', import.meta.url).href;

/**
 * Initializes an icon element as a headphones icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/headphones.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeadphonesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'headphonesIcon', url: URL_HEADPHONES }, ...properties);
}

/**
 * Creates a headphones icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const headphonesIcon = (...properties) => {
    const element = document.createElement('div');
    initHeadphonesIcon(element, ...properties);
    return element;
}
