import { initIcon } from "./icon.js";

//the url of the dry svg; resolved relative to this module
const URL_DRY = new URL('../../assets/icons/dry.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dry icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dry.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DRY }, ...properties);
}

/**
 * Creates a dry icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dryIcon = (...properties) => {
    const element = document.createElement('div');
    initDryIcon(element, ...properties);
    return element;
}
