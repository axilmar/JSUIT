import { initIcon } from "./icon.js";

//the url of the thirty fps select outlined svg; resolved relative to this module
const URL_THIRTYFPSSELECTOUTLINED = new URL('../../assets/icons/thirtyFpsSelectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thirty fps select outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thirtyFpsSelectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThirtyFpsSelectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'thirtyFpsSelectOutlinedIcon', url: URL_THIRTYFPSSELECTOUTLINED }, ...properties);
}

/**
 * Creates a thirty fps select outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thirtyFpsSelectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThirtyFpsSelectOutlinedIcon(element, ...properties);
    return element;
}
