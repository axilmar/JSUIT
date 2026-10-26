import { initIcon } from "./icon.js";

//the url of the burst mode svg; resolved relative to this module
const URL_BURSTMODE = new URL('../../assets/icons/burstMode.svg', import.meta.url).href;

/**
 * Initializes an icon element as a burst mode icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/burstMode.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBurstModeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BURSTMODE }, ...properties);
}

/**
 * Creates a burst mode icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const burstModeIcon = (...properties) => {
    const element = document.createElement('div');
    initBurstModeIcon(element, ...properties);
    return element;
}
