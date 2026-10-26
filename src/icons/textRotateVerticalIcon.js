import { initIcon } from "./icon.js";

//the url of the text rotate vertical svg; resolved relative to this module
const URL_TEXTROTATEVERTICAL = new URL('../../assets/icons/textRotateVertical.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text rotate vertical icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textRotateVertical.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextRotateVerticalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TEXTROTATEVERTICAL }, ...properties);
}

/**
 * Creates a text rotate vertical icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textRotateVerticalIcon = (...properties) => {
    const element = document.createElement('div');
    initTextRotateVerticalIcon(element, ...properties);
    return element;
}
