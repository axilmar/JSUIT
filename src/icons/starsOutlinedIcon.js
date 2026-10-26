import { initIcon } from "./icon.js";

//the url of the stars outlined svg; resolved relative to this module
const URL_STARSOUTLINED = new URL('../../assets/icons/starsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stars outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/starsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStarsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STARSOUTLINED }, ...properties);
}

/**
 * Creates a stars outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const starsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStarsOutlinedIcon(element, ...properties);
    return element;
}
