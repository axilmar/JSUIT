import { initIcon } from "./icon.js";

//the url of the saved search outlined svg; resolved relative to this module
const URL_SAVEDSEARCHOUTLINED = new URL('../../assets/icons/savedSearchOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a saved search outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/savedSearchOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSavedSearchOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SAVEDSEARCHOUTLINED }, ...properties);
}

/**
 * Creates a saved search outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const savedSearchOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSavedSearchOutlinedIcon(element, ...properties);
    return element;
}
