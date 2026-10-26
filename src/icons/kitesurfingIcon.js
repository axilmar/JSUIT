import { initIcon } from "./icon.js";

//the url of the kitesurfing svg; resolved relative to this module
const URL_KITESURFING = new URL('../../assets/icons/kitesurfing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a kitesurfing icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/kitesurfing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKitesurfingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KITESURFING }, ...properties);
}

/**
 * Creates a kitesurfing icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const kitesurfingIcon = (...properties) => {
    const element = document.createElement('div');
    initKitesurfingIcon(element, ...properties);
    return element;
}
