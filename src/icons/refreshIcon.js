import { initIcon } from "./icon.js";

//the url of the refresh svg; resolved relative to this module
const URL_REFRESH = new URL('../../assets/icons/refresh.svg', import.meta.url).href;

/**
 * Initializes an icon element as a refresh icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/refresh.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRefreshIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'refreshIcon', url: URL_REFRESH }, ...properties);
}

/**
 * Creates a refresh icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const refreshIcon = (...properties) => {
    const element = document.createElement('div');
    initRefreshIcon(element, ...properties);
    return element;
}
