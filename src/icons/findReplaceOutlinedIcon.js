import { initIcon } from "./icon.js";

//the url of the find replace outlined svg; resolved relative to this module
const URL_FINDREPLACEOUTLINED = new URL('../../assets/icons/findReplaceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a find replace outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/findReplaceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFindReplaceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FINDREPLACEOUTLINED }, ...properties);
}

/**
 * Creates a find replace outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const findReplaceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFindReplaceOutlinedIcon(element, ...properties);
    return element;
}
