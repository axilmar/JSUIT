import { initIcon } from "./icon.js";

//the url of the comment outlined svg; resolved relative to this module
const URL_COMMENTOUTLINED = new URL('../../assets/icons/commentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a comment outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/commentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCommentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'commentOutlinedIcon', url: URL_COMMENTOUTLINED }, ...properties);
}

/**
 * Creates a comment outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const commentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCommentOutlinedIcon(element, ...properties);
    return element;
}
