import { initIcon } from "./icon.js";

//the url of the unfold more double outlined svg; resolved relative to this module
const URL_UNFOLDMOREDOUBLEOUTLINED = new URL('../../assets/icons/unfoldMoreDoubleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an unfold more double outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/unfoldMoreDoubleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUnfoldMoreDoubleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UNFOLDMOREDOUBLEOUTLINED }, ...properties);
}

/**
 * Creates an unfold more double outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const unfoldMoreDoubleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUnfoldMoreDoubleOutlinedIcon(element, ...properties);
    return element;
}
