import { initIcon } from "./icon.js";

//the url of the text rotate vertical outlined svg; resolved relative to this module
const URL_TEXTROTATEVERTICALOUTLINED = new URL('../../assets/icons/textRotateVerticalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text rotate vertical outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textRotateVerticalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextRotateVerticalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'textRotateVerticalOutlinedIcon', url: URL_TEXTROTATEVERTICALOUTLINED }, ...properties);
}

/**
 * Creates a text rotate vertical outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textRotateVerticalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTextRotateVerticalOutlinedIcon(element, ...properties);
    return element;
}
