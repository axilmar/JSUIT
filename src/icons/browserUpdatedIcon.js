import { initIcon } from "./icon.js";

//the url of the browser updated svg; resolved relative to this module
const URL_BROWSERUPDATED = new URL('../../assets/icons/browserUpdated.svg', import.meta.url).href;

/**
 * Initializes an icon element as a browser updated icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/browserUpdated.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrowserUpdatedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BROWSERUPDATED }, ...properties);
}

/**
 * Creates a browser updated icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const browserUpdatedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrowserUpdatedIcon(element, ...properties);
    return element;
}
