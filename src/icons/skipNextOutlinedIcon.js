import { initIcon } from "./icon.js";

//the url of the skip next outlined svg; resolved relative to this module
const URL_SKIPNEXTOUTLINED = new URL('../../assets/icons/skipNextOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a skip next outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/skipNextOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSkipNextOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'skipNextOutlinedIcon', url: URL_SKIPNEXTOUTLINED }, ...properties);
}

/**
 * Creates a skip next outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const skipNextOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSkipNextOutlinedIcon(element, ...properties);
    return element;
}
