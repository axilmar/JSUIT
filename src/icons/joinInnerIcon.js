import { initIcon } from "./icon.js";

//the url of the join inner svg; resolved relative to this module
const URL_JOININNER = new URL('../../assets/icons/joinInner.svg', import.meta.url).href;

/**
 * Initializes an icon element as a join inner icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/joinInner.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initJoinInnerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_JOININNER }, ...properties);
}

/**
 * Creates a join inner icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const joinInnerIcon = (...properties) => {
    const element = document.createElement('div');
    initJoinInnerIcon(element, ...properties);
    return element;
}
