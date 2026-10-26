import { initIcon } from "./icon.js";

//the url of the stay current landscape outlined svg; resolved relative to this module
const URL_STAYCURRENTLANDSCAPEOUTLINED = new URL('../../assets/icons/stayCurrentLandscapeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stay current landscape outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stayCurrentLandscapeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStayCurrentLandscapeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STAYCURRENTLANDSCAPEOUTLINED }, ...properties);
}

/**
 * Creates a stay current landscape outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stayCurrentLandscapeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStayCurrentLandscapeOutlinedIcon(element, ...properties);
    return element;
}
