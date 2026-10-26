import { initIcon } from "./icon.js";

//the url of the light svg; resolved relative to this module
const URL_LIGHT = new URL('../../assets/icons/light.svg', import.meta.url).href;

/**
 * Initializes an icon element as a light icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/light.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LIGHT }, ...properties);
}

/**
 * Creates a light icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lightIcon = (...properties) => {
    const element = document.createElement('div');
    initLightIcon(element, ...properties);
    return element;
}
