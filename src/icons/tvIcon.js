import { initIcon } from "./icon.js";

//the url of the tv svg; resolved relative to this module
const URL_TV = new URL('../../assets/icons/tv.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tv icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tv.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTvIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tvIcon', url: URL_TV }, ...properties);
}

/**
 * Creates a tv icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tvIcon = (...properties) => {
    const element = document.createElement('div');
    initTvIcon(element, ...properties);
    return element;
}
