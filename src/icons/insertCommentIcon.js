import { initIcon } from "./icon.js";

//the url of the insert comment svg; resolved relative to this module
const URL_INSERTCOMMENT = new URL('../../assets/icons/insertComment.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert comment icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertComment.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertCommentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INSERTCOMMENT }, ...properties);
}

/**
 * Creates an insert comment icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertCommentIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertCommentIcon(element, ...properties);
    return element;
}
