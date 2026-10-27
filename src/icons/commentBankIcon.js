import { initIcon } from "./icon.js";

//the url of the comment bank svg; resolved relative to this module
const URL_COMMENTBANK = new URL('../../assets/icons/commentBank.svg', import.meta.url).href;

/**
 * Initializes an icon element as a comment bank icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/commentBank.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCommentBankIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'commentBankIcon', url: URL_COMMENTBANK }, ...properties);
}

/**
 * Creates a comment bank icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const commentBankIcon = (...properties) => {
    const element = document.createElement('div');
    initCommentBankIcon(element, ...properties);
    return element;
}
