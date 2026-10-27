import { initIcon } from "./icon.js";

//the url of the thumb up off alt outlined svg; resolved relative to this module
const URL_THUMBUPOFFALTOUTLINED = new URL('../../assets/icons/thumbUpOffAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thumb up off alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thumbUpOffAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThumbUpOffAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'thumbUpOffAltOutlinedIcon', url: URL_THUMBUPOFFALTOUTLINED }, ...properties);
}

/**
 * Creates a thumb up off alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thumbUpOffAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThumbUpOffAltOutlinedIcon(element, ...properties);
    return element;
}
