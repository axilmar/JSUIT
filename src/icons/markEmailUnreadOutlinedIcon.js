import { initIcon } from "./icon.js";

//the url of the mark email unread outlined svg; resolved relative to this module
const URL_MARKEMAILUNREADOUTLINED = new URL('../../assets/icons/markEmailUnreadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mark email unread outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markEmailUnreadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkEmailUnreadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'markEmailUnreadOutlinedIcon', url: URL_MARKEMAILUNREADOUTLINED }, ...properties);
}

/**
 * Creates a mark email unread outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markEmailUnreadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkEmailUnreadOutlinedIcon(element, ...properties);
    return element;
}
