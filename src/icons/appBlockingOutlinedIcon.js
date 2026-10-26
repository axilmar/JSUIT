import { initIcon } from "./icon.js";

//the url of the app blocking outlined svg; resolved relative to this module
const URL_APPBLOCKINGOUTLINED = new URL('../../assets/icons/appBlockingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an app blocking outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/appBlockingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAppBlockingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_APPBLOCKINGOUTLINED }, ...properties);
}

/**
 * Creates an app blocking outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const appBlockingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAppBlockingOutlinedIcon(element, ...properties);
    return element;
}
