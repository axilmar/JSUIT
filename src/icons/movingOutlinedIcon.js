import { initIcon } from "./icon.js";

//the url of the moving outlined svg; resolved relative to this module
const URL_MOVINGOUTLINED = new URL('../../assets/icons/movingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a moving outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/movingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMovingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOVINGOUTLINED }, ...properties);
}

/**
 * Creates a moving outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const movingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMovingOutlinedIcon(element, ...properties);
    return element;
}
