import { initIcon } from "./icon.js";

//the url of the living svg; resolved relative to this module
const URL_LIVING = new URL('../../assets/icons/living.svg', import.meta.url).href;

/**
 * Initializes an icon element as a living icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/living.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLivingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'livingIcon', url: URL_LIVING }, ...properties);
}

/**
 * Creates a living icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const livingIcon = (...properties) => {
    const element = document.createElement('div');
    initLivingIcon(element, ...properties);
    return element;
}
