import { initIcon } from "./icon.js";

//the url of the insert comment outlined svg; resolved relative to this module
const URL_INSERTCOMMENTOUTLINED = new URL('../../assets/icons/insertCommentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert comment outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertCommentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertCommentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'insertCommentOutlinedIcon', url: URL_INSERTCOMMENTOUTLINED }, ...properties);
}

/**
 * Creates an insert comment outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertCommentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertCommentOutlinedIcon(element, ...properties);
    return element;
}
