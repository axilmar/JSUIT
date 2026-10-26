import { initIcon } from "./icon.js";

//the url of the merge svg; resolved relative to this module
const URL_MERGE = new URL('../../assets/icons/merge.svg', import.meta.url).href;

/**
 * Initializes an icon element as a merge icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/merge.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMergeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MERGE }, ...properties);
}

/**
 * Creates a merge icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mergeIcon = (...properties) => {
    const element = document.createElement('div');
    initMergeIcon(element, ...properties);
    return element;
}
