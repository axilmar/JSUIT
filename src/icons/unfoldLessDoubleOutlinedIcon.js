import { initIcon } from "./icon.js";

//the url of the unfold less double outlined svg; resolved relative to this module
const URL_UNFOLDLESSDOUBLEOUTLINED = new URL('../../assets/icons/unfoldLessDoubleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an unfold less double outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/unfoldLessDoubleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUnfoldLessDoubleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UNFOLDLESSDOUBLEOUTLINED }, ...properties);
}

/**
 * Creates an unfold less double outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const unfoldLessDoubleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUnfoldLessDoubleOutlinedIcon(element, ...properties);
    return element;
}
