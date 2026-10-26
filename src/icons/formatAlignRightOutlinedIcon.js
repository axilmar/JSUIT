import { initIcon } from "./icon.js";

//the url of the format align right outlined svg; resolved relative to this module
const URL_FORMATALIGNRIGHTOUTLINED = new URL('../../assets/icons/formatAlignRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format align right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatAlignRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatAlignRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATALIGNRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a format align right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatAlignRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatAlignRightOutlinedIcon(element, ...properties);
    return element;
}
