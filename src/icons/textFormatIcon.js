import { initIcon } from "./icon.js";

//the url of the text format svg; resolved relative to this module
const URL_TEXTFORMAT = new URL('../../assets/icons/textFormat.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text format icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textFormat.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextFormatIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'textFormatIcon', url: URL_TEXTFORMAT }, ...properties);
}

/**
 * Creates a text format icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textFormatIcon = (...properties) => {
    const element = document.createElement('div');
    initTextFormatIcon(element, ...properties);
    return element;
}
