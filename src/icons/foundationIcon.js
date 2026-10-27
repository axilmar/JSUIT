import { initIcon } from "./icon.js";

//the url of the foundation svg; resolved relative to this module
const URL_FOUNDATION = new URL('../../assets/icons/foundation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a foundation icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/foundation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFoundationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'foundationIcon', url: URL_FOUNDATION }, ...properties);
}

/**
 * Creates a foundation icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const foundationIcon = (...properties) => {
    const element = document.createElement('div');
    initFoundationIcon(element, ...properties);
    return element;
}
