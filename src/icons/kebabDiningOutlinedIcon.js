import { initIcon } from "./icon.js";

//the url of the kebab dining outlined svg; resolved relative to this module
const URL_KEBABDININGOUTLINED = new URL('../../assets/icons/kebabDiningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a kebab dining outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/kebabDiningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKebabDiningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEBABDININGOUTLINED }, ...properties);
}

/**
 * Creates a kebab dining outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const kebabDiningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKebabDiningOutlinedIcon(element, ...properties);
    return element;
}
