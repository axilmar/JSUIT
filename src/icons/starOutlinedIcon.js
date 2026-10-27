import { initIcon } from "./icon.js";

//the url of the star outlined svg; resolved relative to this module
const URL_STAROUTLINED = new URL('../../assets/icons/starOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a star outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/starOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'starOutlinedIcon', url: URL_STAROUTLINED }, ...properties);
}

/**
 * Creates a star outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const starOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStarOutlinedIcon(element, ...properties);
    return element;
}
