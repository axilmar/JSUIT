import { initIcon } from "./icon.js";

//the url of the padding outlined svg; resolved relative to this module
const URL_PADDINGOUTLINED = new URL('../../assets/icons/paddingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a padding outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/paddingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPaddingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PADDINGOUTLINED }, ...properties);
}

/**
 * Creates a padding outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const paddingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPaddingOutlinedIcon(element, ...properties);
    return element;
}
