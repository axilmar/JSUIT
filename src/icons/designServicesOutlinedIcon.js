import { initIcon } from "./icon.js";

//the url of the design services outlined svg; resolved relative to this module
const URL_DESIGNSERVICESOUTLINED = new URL('../../assets/icons/designServicesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a design services outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/designServicesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDesignServicesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DESIGNSERVICESOUTLINED }, ...properties);
}

/**
 * Creates a design services outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const designServicesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDesignServicesOutlinedIcon(element, ...properties);
    return element;
}
