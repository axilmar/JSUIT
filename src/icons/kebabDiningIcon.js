import { initIcon } from "./icon.js";

//the url of the kebab dining svg; resolved relative to this module
const URL_KEBABDINING = new URL('../../assets/icons/kebabDining.svg', import.meta.url).href;

/**
 * Initializes an icon element as a kebab dining icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/kebabDining.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKebabDiningIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'kebabDiningIcon', url: URL_KEBABDINING }, ...properties);
}

/**
 * Creates a kebab dining icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const kebabDiningIcon = (...properties) => {
    const element = document.createElement('div');
    initKebabDiningIcon(element, ...properties);
    return element;
}
