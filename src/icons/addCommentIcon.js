import { initIcon } from "./icon.js";

//the url of the add comment svg; resolved relative to this module
const URL_ADDCOMMENT = new URL('../../assets/icons/addComment.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add comment icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addComment.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddCommentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDCOMMENT }, ...properties);
}

/**
 * Creates an add comment icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addCommentIcon = (...properties) => {
    const element = document.createElement('div');
    initAddCommentIcon(element, ...properties);
    return element;
}
