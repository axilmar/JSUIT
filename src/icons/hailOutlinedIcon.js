import { initIcon } from "./icon.js";

//the url of the hail outlined svg; resolved relative to this module
const URL_HAILOUTLINED = new URL('../../assets/icons/hailOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hail outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hailOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHailOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HAILOUTLINED }, ...properties);
}

/**
 * Creates a hail outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hailOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHailOutlinedIcon(element, ...properties);
    return element;
}
