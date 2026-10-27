import { initIcon } from "./icon.js";

//the url of the add comment outlined svg; resolved relative to this module
const URL_ADDCOMMENTOUTLINED = new URL('../../assets/icons/addCommentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add comment outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addCommentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddCommentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addCommentOutlinedIcon', url: URL_ADDCOMMENTOUTLINED }, ...properties);
}

/**
 * Creates an add comment outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addCommentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddCommentOutlinedIcon(element, ...properties);
    return element;
}
