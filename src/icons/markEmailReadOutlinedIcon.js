import { initIcon } from "./icon.js";

//the url of the mark email read outlined svg; resolved relative to this module
const URL_MARKEMAILREADOUTLINED = new URL('../../assets/icons/markEmailReadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mark email read outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/markEmailReadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarkEmailReadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MARKEMAILREADOUTLINED }, ...properties);
}

/**
 * Creates a mark email read outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const markEmailReadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMarkEmailReadOutlinedIcon(element, ...properties);
    return element;
}
