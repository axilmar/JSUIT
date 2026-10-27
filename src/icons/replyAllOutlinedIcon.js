import { initIcon } from "./icon.js";

//the url of the reply all outlined svg; resolved relative to this module
const URL_REPLYALLOUTLINED = new URL('../../assets/icons/replyAllOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a reply all outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/replyAllOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReplyAllOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'replyAllOutlinedIcon', url: URL_REPLYALLOUTLINED }, ...properties);
}

/**
 * Creates a reply all outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const replyAllOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReplyAllOutlinedIcon(element, ...properties);
    return element;
}
