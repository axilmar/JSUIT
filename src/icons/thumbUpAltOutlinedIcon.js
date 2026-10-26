import { initIcon } from "./icon.js";

//the url of the thumb up alt outlined svg; resolved relative to this module
const URL_THUMBUPALTOUTLINED = new URL('../../assets/icons/thumbUpAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thumb up alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thumbUpAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThumbUpAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THUMBUPALTOUTLINED }, ...properties);
}

/**
 * Creates a thumb up alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thumbUpAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThumbUpAltOutlinedIcon(element, ...properties);
    return element;
}
