import { initIcon } from "./icon.js";

//the url of the fence svg; resolved relative to this module
const URL_FENCE = new URL('../../assets/icons/fence.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fence icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fence.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFenceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fenceIcon', url: URL_FENCE }, ...properties);
}

/**
 * Creates a fence icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fenceIcon = (...properties) => {
    const element = document.createElement('div');
    initFenceIcon(element, ...properties);
    return element;
}
