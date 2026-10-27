import { initIcon } from "./icon.js";

//the url of the bungalow outlined svg; resolved relative to this module
const URL_BUNGALOWOUTLINED = new URL('../../assets/icons/bungalowOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bungalow outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bungalowOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBungalowOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bungalowOutlinedIcon', url: URL_BUNGALOWOUTLINED }, ...properties);
}

/**
 * Creates a bungalow outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bungalowOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBungalowOutlinedIcon(element, ...properties);
    return element;
}
