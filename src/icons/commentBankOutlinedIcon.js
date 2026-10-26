import { initIcon } from "./icon.js";

//the url of the comment bank outlined svg; resolved relative to this module
const URL_COMMENTBANKOUTLINED = new URL('../../assets/icons/commentBankOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a comment bank outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/commentBankOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCommentBankOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COMMENTBANKOUTLINED }, ...properties);
}

/**
 * Creates a comment bank outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const commentBankOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCommentBankOutlinedIcon(element, ...properties);
    return element;
}
