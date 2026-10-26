import { initIcon } from "./icon.js";

//the url of the paragliding outlined svg; resolved relative to this module
const URL_PARAGLIDINGOUTLINED = new URL('../../assets/icons/paraglidingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a paragliding outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/paraglidingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initParaglidingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PARAGLIDINGOUTLINED }, ...properties);
}

/**
 * Creates a paragliding outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const paraglidingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initParaglidingOutlinedIcon(element, ...properties);
    return element;
}
