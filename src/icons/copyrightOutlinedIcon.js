import { initIcon } from "./icon.js";

//the url of the copyright outlined svg; resolved relative to this module
const URL_COPYRIGHTOUTLINED = new URL('../../assets/icons/copyrightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a copyright outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/copyrightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCopyrightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COPYRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a copyright outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const copyrightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCopyrightOutlinedIcon(element, ...properties);
    return element;
}
