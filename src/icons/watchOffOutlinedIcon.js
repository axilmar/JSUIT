import { initIcon } from "./icon.js";

//the url of the watch off outlined svg; resolved relative to this module
const URL_WATCHOFFOUTLINED = new URL('../../assets/icons/watchOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a watch off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/watchOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWatchOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'watchOffOutlinedIcon', url: URL_WATCHOFFOUTLINED }, ...properties);
}

/**
 * Creates a watch off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const watchOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWatchOffOutlinedIcon(element, ...properties);
    return element;
}
