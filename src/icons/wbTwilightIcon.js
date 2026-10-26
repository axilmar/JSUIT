import { initIcon } from "./icon.js";

//the url of the wb twilight svg; resolved relative to this module
const URL_WBTWILIGHT = new URL('../../assets/icons/wbTwilight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb twilight icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbTwilight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbTwilightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WBTWILIGHT }, ...properties);
}

/**
 * Creates a wb twilight icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbTwilightIcon = (...properties) => {
    const element = document.createElement('div');
    initWbTwilightIcon(element, ...properties);
    return element;
}
