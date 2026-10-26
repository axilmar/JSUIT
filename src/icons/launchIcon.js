import { initIcon } from "./icon.js";

//the url of the launch svg; resolved relative to this module
const URL_LAUNCH = new URL('../../assets/icons/launch.svg', import.meta.url).href;

/**
 * Initializes an icon element as a launch icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/launch.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLaunchIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LAUNCH }, ...properties);
}

/**
 * Creates a launch icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const launchIcon = (...properties) => {
    const element = document.createElement('div');
    initLaunchIcon(element, ...properties);
    return element;
}
