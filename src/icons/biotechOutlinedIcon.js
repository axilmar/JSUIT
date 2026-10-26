import { initIcon } from "./icon.js";

//the url of the biotech outlined svg; resolved relative to this module
const URL_BIOTECHOUTLINED = new URL('../../assets/icons/biotechOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a biotech outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/biotechOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBiotechOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BIOTECHOUTLINED }, ...properties);
}

/**
 * Creates a biotech outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const biotechOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBiotechOutlinedIcon(element, ...properties);
    return element;
}
