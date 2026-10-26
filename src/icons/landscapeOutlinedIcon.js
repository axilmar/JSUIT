import { initIcon } from "./icon.js";

//the url of the landscape outlined svg; resolved relative to this module
const URL_LANDSCAPEOUTLINED = new URL('../../assets/icons/landscapeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a landscape outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/landscapeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLandscapeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LANDSCAPEOUTLINED }, ...properties);
}

/**
 * Creates a landscape outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const landscapeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLandscapeOutlinedIcon(element, ...properties);
    return element;
}
