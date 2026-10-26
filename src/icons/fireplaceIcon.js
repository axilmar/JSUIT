import { initIcon } from "./icon.js";

//the url of the fireplace svg; resolved relative to this module
const URL_FIREPLACE = new URL('../../assets/icons/fireplace.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fireplace icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fireplace.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFireplaceIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIREPLACE }, ...properties);
}

/**
 * Creates a fireplace icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fireplaceIcon = (...properties) => {
    const element = document.createElement('div');
    initFireplaceIcon(element, ...properties);
    return element;
}
