import { initIcon } from "./icon.js";

//the url of the text rotate up outlined svg; resolved relative to this module
const URL_TEXTROTATEUPOUTLINED = new URL('../../assets/icons/textRotateUpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text rotate up outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textRotateUpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextRotateUpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TEXTROTATEUPOUTLINED }, ...properties);
}

/**
 * Creates a text rotate up outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textRotateUpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTextRotateUpOutlinedIcon(element, ...properties);
    return element;
}
