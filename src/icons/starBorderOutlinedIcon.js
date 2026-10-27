import { initIcon } from "./icon.js";

//the url of the star border outlined svg; resolved relative to this module
const URL_STARBORDEROUTLINED = new URL('../../assets/icons/starBorderOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a star border outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/starBorderOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStarBorderOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'starBorderOutlinedIcon', url: URL_STARBORDEROUTLINED }, ...properties);
}

/**
 * Creates a star border outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const starBorderOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStarBorderOutlinedIcon(element, ...properties);
    return element;
}
