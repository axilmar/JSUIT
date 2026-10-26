import { initIcon } from "./icon.js";

//the url of the arrow outward outlined svg; resolved relative to this module
const URL_ARROWOUTWARDOUTLINED = new URL('../../assets/icons/arrowOutwardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow outward outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowOutwardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowOutwardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWOUTWARDOUTLINED }, ...properties);
}

/**
 * Creates an arrow outward outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowOutwardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowOutwardOutlinedIcon(element, ...properties);
    return element;
}
