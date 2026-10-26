import { initIcon } from "./icon.js";

//the url of the kayaking svg; resolved relative to this module
const URL_KAYAKING = new URL('../../assets/icons/kayaking.svg', import.meta.url).href;

/**
 * Initializes an icon element as a kayaking icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/kayaking.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKayakingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KAYAKING }, ...properties);
}

/**
 * Creates a kayaking icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const kayakingIcon = (...properties) => {
    const element = document.createElement('div');
    initKayakingIcon(element, ...properties);
    return element;
}
