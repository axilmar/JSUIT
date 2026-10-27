import { initIcon } from "./icon.js";

//the url of the thumb down outlined svg; resolved relative to this module
const URL_THUMBDOWNOUTLINED = new URL('../../assets/icons/thumbDownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thumb down outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thumbDownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThumbDownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'thumbDownOutlinedIcon', url: URL_THUMBDOWNOUTLINED }, ...properties);
}

/**
 * Creates a thumb down outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thumbDownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThumbDownOutlinedIcon(element, ...properties);
    return element;
}
