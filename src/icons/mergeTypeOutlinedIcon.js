import { initIcon } from "./icon.js";

//the url of the merge type outlined svg; resolved relative to this module
const URL_MERGETYPEOUTLINED = new URL('../../assets/icons/mergeTypeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a merge type outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mergeTypeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMergeTypeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MERGETYPEOUTLINED }, ...properties);
}

/**
 * Creates a merge type outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mergeTypeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMergeTypeOutlinedIcon(element, ...properties);
    return element;
}
