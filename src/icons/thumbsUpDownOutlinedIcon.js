import { initIcon } from "./icon.js";

//the url of the thumbs up down outlined svg; resolved relative to this module
const URL_THUMBSUPDOWNOUTLINED = new URL('../../assets/icons/thumbsUpDownOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thumbs up down outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thumbsUpDownOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThumbsUpDownOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'thumbsUpDownOutlinedIcon', url: URL_THUMBSUPDOWNOUTLINED }, ...properties);
}

/**
 * Creates a thumbs up down outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thumbsUpDownOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThumbsUpDownOutlinedIcon(element, ...properties);
    return element;
}
