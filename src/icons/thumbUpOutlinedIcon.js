import { initIcon } from "./icon.js";

//the url of the thumb up outlined svg; resolved relative to this module
const URL_THUMBUPOUTLINED = new URL('../../assets/icons/thumbUpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thumb up outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thumbUpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThumbUpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'thumbUpOutlinedIcon', url: URL_THUMBUPOUTLINED }, ...properties);
}

/**
 * Creates a thumb up outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thumbUpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThumbUpOutlinedIcon(element, ...properties);
    return element;
}
