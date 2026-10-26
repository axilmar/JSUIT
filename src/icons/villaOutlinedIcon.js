import { initIcon } from "./icon.js";

//the url of the villa outlined svg; resolved relative to this module
const URL_VILLAOUTLINED = new URL('../../assets/icons/villaOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a villa outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/villaOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVillaOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VILLAOUTLINED }, ...properties);
}

/**
 * Creates a villa outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const villaOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVillaOutlinedIcon(element, ...properties);
    return element;
}
