import { initIcon } from "./icon.js";

//the url of the mode comment outlined svg; resolved relative to this module
const URL_MODECOMMENTOUTLINED = new URL('../../assets/icons/modeCommentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode comment outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modeCommentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeCommentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MODECOMMENTOUTLINED }, ...properties);
}

/**
 * Creates a mode comment outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeCommentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initModeCommentOutlinedIcon(element, ...properties);
    return element;
}
