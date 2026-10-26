import { initIcon } from "./icon.js";

//the url of the category outlined svg; resolved relative to this module
const URL_CATEGORYOUTLINED = new URL('../../assets/icons/categoryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a category outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/categoryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCategoryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CATEGORYOUTLINED }, ...properties);
}

/**
 * Creates a category outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const categoryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCategoryOutlinedIcon(element, ...properties);
    return element;
}
