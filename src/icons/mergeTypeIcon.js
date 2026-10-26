import { initIcon } from "./icon.js";

//the url of the merge type svg; resolved relative to this module
const URL_MERGETYPE = new URL('../../assets/icons/mergeType.svg', import.meta.url).href;

/**
 * Initializes an icon element as a merge type icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mergeType.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMergeTypeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MERGETYPE }, ...properties);
}

/**
 * Creates a merge type icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mergeTypeIcon = (...properties) => {
    const element = document.createElement('div');
    initMergeTypeIcon(element, ...properties);
    return element;
}
