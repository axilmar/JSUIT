import { initIcon } from "./icon.js";

//the url of the call merge svg; resolved relative to this module
const URL_CALLMERGE = new URL('../../assets/icons/callMerge.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call merge icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callMerge.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallMergeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CALLMERGE }, ...properties);
}

/**
 * Creates a call merge icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callMergeIcon = (...properties) => {
    const element = document.createElement('div');
    initCallMergeIcon(element, ...properties);
    return element;
}
