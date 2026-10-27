import { initIcon } from "./icon.js";

//the url of the text snippet outlined svg; resolved relative to this module
const URL_TEXTSNIPPETOUTLINED = new URL('../../assets/icons/textSnippetOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text snippet outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textSnippetOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextSnippetOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'textSnippetOutlinedIcon', url: URL_TEXTSNIPPETOUTLINED }, ...properties);
}

/**
 * Creates a text snippet outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textSnippetOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTextSnippetOutlinedIcon(element, ...properties);
    return element;
}
