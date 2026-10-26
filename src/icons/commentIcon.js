import { initIcon } from "./icon.js";

//the url of the comment svg; resolved relative to this module
const URL_COMMENT = new URL('../../assets/icons/comment.svg', import.meta.url).href;

/**
 * Initializes an icon element as a comment icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/comment.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCommentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COMMENT }, ...properties);
}

/**
 * Creates a comment icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const commentIcon = (...properties) => {
    const element = document.createElement('div');
    initCommentIcon(element, ...properties);
    return element;
}
