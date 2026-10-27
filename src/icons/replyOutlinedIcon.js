import { initIcon } from "./icon.js";

//the url of the reply outlined svg; resolved relative to this module
const URL_REPLYOUTLINED = new URL('../../assets/icons/replyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a reply outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/replyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initReplyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'replyOutlinedIcon', url: URL_REPLYOUTLINED }, ...properties);
}

/**
 * Creates a reply outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const replyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initReplyOutlinedIcon(element, ...properties);
    return element;
}
