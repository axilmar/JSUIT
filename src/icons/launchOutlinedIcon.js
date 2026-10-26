import { initIcon } from "./icon.js";

//the url of the launch outlined svg; resolved relative to this module
const URL_LAUNCHOUTLINED = new URL('../../assets/icons/launchOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a launch outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/launchOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLaunchOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LAUNCHOUTLINED }, ...properties);
}

/**
 * Creates a launch outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const launchOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLaunchOutlinedIcon(element, ...properties);
    return element;
}
