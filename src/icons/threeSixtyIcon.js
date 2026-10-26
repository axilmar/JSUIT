import { initIcon } from "./icon.js";

//the url of the three sixty svg; resolved relative to this module
const URL_THREESIXTY = new URL('../../assets/icons/threeSixty.svg', import.meta.url).href;

/**
 * Initializes an icon element as a three sixty icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/threeSixty.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThreeSixtyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THREESIXTY }, ...properties);
}

/**
 * Creates a three sixty icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const threeSixtyIcon = (...properties) => {
    const element = document.createElement('div');
    initThreeSixtyIcon(element, ...properties);
    return element;
}
