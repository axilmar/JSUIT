import { initIcon } from "./icon.js";

//the url of the nightlight outlined svg; resolved relative to this module
const URL_NIGHTLIGHTOUTLINED = new URL('../../assets/icons/nightlightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nightlight outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nightlightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNightlightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NIGHTLIGHTOUTLINED }, ...properties);
}

/**
 * Creates a nightlight outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nightlightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNightlightOutlinedIcon(element, ...properties);
    return element;
}
