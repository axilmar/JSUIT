import { initIcon } from "./icon.js";

//the url of the subway svg; resolved relative to this module
const URL_SUBWAY = new URL('../../assets/icons/subway.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subway icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subway.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubwayIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SUBWAY }, ...properties);
}

/**
 * Creates a subway icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subwayIcon = (...properties) => {
    const element = document.createElement('div');
    initSubwayIcon(element, ...properties);
    return element;
}
