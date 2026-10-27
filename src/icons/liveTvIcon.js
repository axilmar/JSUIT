import { initIcon } from "./icon.js";

//the url of the live tv svg; resolved relative to this module
const URL_LIVETV = new URL('../../assets/icons/liveTv.svg', import.meta.url).href;

/**
 * Initializes an icon element as a live tv icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/liveTv.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLiveTvIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'liveTvIcon', url: URL_LIVETV }, ...properties);
}

/**
 * Creates a live tv icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const liveTvIcon = (...properties) => {
    const element = document.createElement('div');
    initLiveTvIcon(element, ...properties);
    return element;
}
