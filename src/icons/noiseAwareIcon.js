import { initIcon } from "./icon.js";

//the url of the noise aware svg; resolved relative to this module
const URL_NOISEAWARE = new URL('../../assets/icons/noiseAware.svg', import.meta.url).href;

/**
 * Initializes an icon element as a noise aware icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noiseAware.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoiseAwareIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOISEAWARE }, ...properties);
}

/**
 * Creates a noise aware icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noiseAwareIcon = (...properties) => {
    const element = document.createElement('div');
    initNoiseAwareIcon(element, ...properties);
    return element;
}
