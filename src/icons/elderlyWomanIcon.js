import { initIcon } from "./icon.js";

//the url of the elderly woman svg; resolved relative to this module
const URL_ELDERLYWOMAN = new URL('../../assets/icons/elderlyWoman.svg', import.meta.url).href;

/**
 * Initializes an icon element as an elderly woman icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/elderlyWoman.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElderlyWomanIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'elderlyWomanIcon', url: URL_ELDERLYWOMAN }, ...properties);
}

/**
 * Creates an elderly woman icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const elderlyWomanIcon = (...properties) => {
    const element = document.createElement('div');
    initElderlyWomanIcon(element, ...properties);
    return element;
}
