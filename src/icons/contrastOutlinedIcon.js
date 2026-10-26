import { initIcon } from "./icon.js";

//the url of the contrast outlined svg; resolved relative to this module
const URL_CONTRASTOUTLINED = new URL('../../assets/icons/contrastOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a contrast outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contrastOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContrastOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONTRASTOUTLINED }, ...properties);
}

/**
 * Creates a contrast outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contrastOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initContrastOutlinedIcon(element, ...properties);
    return element;
}
