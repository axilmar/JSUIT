import { initIcon } from "./icon.js";

//the url of the wysiwyg outlined svg; resolved relative to this module
const URL_WYSIWYGOUTLINED = new URL('../../assets/icons/wysiwygOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wysiwyg outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wysiwygOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWysiwygOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WYSIWYGOUTLINED }, ...properties);
}

/**
 * Creates a wysiwyg outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wysiwygOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWysiwygOutlinedIcon(element, ...properties);
    return element;
}
