import { initIcon } from "./icon.js";

//the url of the troubleshoot outlined svg; resolved relative to this module
const URL_TROUBLESHOOTOUTLINED = new URL('../../assets/icons/troubleshootOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a troubleshoot outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/troubleshootOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTroubleshootOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TROUBLESHOOTOUTLINED }, ...properties);
}

/**
 * Creates a troubleshoot outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const troubleshootOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTroubleshootOutlinedIcon(element, ...properties);
    return element;
}
