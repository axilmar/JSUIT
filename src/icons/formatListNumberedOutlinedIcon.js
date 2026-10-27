import { initIcon } from "./icon.js";

//the url of the format list numbered outlined svg; resolved relative to this module
const URL_FORMATLISTNUMBEREDOUTLINED = new URL('../../assets/icons/formatListNumberedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format list numbered outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatListNumberedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatListNumberedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatListNumberedOutlinedIcon', url: URL_FORMATLISTNUMBEREDOUTLINED }, ...properties);
}

/**
 * Creates a format list numbered outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatListNumberedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatListNumberedOutlinedIcon(element, ...properties);
    return element;
}
