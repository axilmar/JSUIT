import { initIcon } from "./icon.js";

//the url of the tsunami svg; resolved relative to this module
const URL_TSUNAMI = new URL('../../assets/icons/tsunami.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tsunami icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tsunami.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTsunamiIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TSUNAMI }, ...properties);
}

/**
 * Creates a tsunami icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tsunamiIcon = (...properties) => {
    const element = document.createElement('div');
    initTsunamiIcon(element, ...properties);
    return element;
}
