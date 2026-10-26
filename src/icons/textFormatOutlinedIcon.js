import { initIcon } from "./icon.js";

//the url of the text format outlined svg; resolved relative to this module
const URL_TEXTFORMATOUTLINED = new URL('../../assets/icons/textFormatOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text format outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textFormatOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextFormatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TEXTFORMATOUTLINED }, ...properties);
}

/**
 * Creates a text format outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textFormatOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTextFormatOutlinedIcon(element, ...properties);
    return element;
}
