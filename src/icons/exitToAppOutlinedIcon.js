import { initIcon } from "./icon.js";

//the url of the exit to app outlined svg; resolved relative to this module
const URL_EXITTOAPPOUTLINED = new URL('../../assets/icons/exitToAppOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an exit to app outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/exitToAppOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initExitToAppOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EXITTOAPPOUTLINED }, ...properties);
}

/**
 * Creates an exit to app outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const exitToAppOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initExitToAppOutlinedIcon(element, ...properties);
    return element;
}
