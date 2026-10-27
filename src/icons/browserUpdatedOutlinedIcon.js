import { initIcon } from "./icon.js";

//the url of the browser updated outlined svg; resolved relative to this module
const URL_BROWSERUPDATEDOUTLINED = new URL('../../assets/icons/browserUpdatedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a browser updated outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/browserUpdatedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrowserUpdatedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'browserUpdatedOutlinedIcon', url: URL_BROWSERUPDATEDOUTLINED }, ...properties);
}

/**
 * Creates a browser updated outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const browserUpdatedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrowserUpdatedOutlinedIcon(element, ...properties);
    return element;
}
