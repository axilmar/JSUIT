import { initIcon } from "./icon.js";

//the url of the surfing outlined svg; resolved relative to this module
const URL_SURFINGOUTLINED = new URL('../../assets/icons/surfingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a surfing outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/surfingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSurfingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SURFINGOUTLINED }, ...properties);
}

/**
 * Creates a surfing outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const surfingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSurfingOutlinedIcon(element, ...properties);
    return element;
}
