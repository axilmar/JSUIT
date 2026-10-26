import { initIcon } from "./icon.js";

//the url of the grain svg; resolved relative to this module
const URL_GRAIN = new URL('../../assets/icons/grain.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grain icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/grain.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGrainIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GRAIN }, ...properties);
}

/**
 * Creates a grain icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const grainIcon = (...properties) => {
    const element = document.createElement('div');
    initGrainIcon(element, ...properties);
    return element;
}
