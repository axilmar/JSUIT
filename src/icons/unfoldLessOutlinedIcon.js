import { initIcon } from "./icon.js";

//the url of the unfold less outlined svg; resolved relative to this module
const URL_UNFOLDLESSOUTLINED = new URL('../../assets/icons/unfoldLessOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an unfold less outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/unfoldLessOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUnfoldLessOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UNFOLDLESSOUTLINED }, ...properties);
}

/**
 * Creates an unfold less outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const unfoldLessOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUnfoldLessOutlinedIcon(element, ...properties);
    return element;
}
