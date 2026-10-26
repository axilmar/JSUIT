import { initIcon } from "./icon.js";

//the url of the switch video svg; resolved relative to this module
const URL_SWITCHVIDEO = new URL('../../assets/icons/switchVideo.svg', import.meta.url).href;

/**
 * Initializes an icon element as a switch video icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/switchVideo.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitchVideoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWITCHVIDEO }, ...properties);
}

/**
 * Creates a switch video icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const switchVideoIcon = (...properties) => {
    const element = document.createElement('div');
    initSwitchVideoIcon(element, ...properties);
    return element;
}
