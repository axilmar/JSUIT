import { initIcon } from "./icon.js";

//the url of the broadcast on home svg; resolved relative to this module
const URL_BROADCASTONHOME = new URL('../../assets/icons/broadcastOnHome.svg', import.meta.url).href;

/**
 * Initializes an icon element as a broadcast on home icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/broadcastOnHome.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBroadcastOnHomeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'broadcastOnHomeIcon', url: URL_BROADCASTONHOME }, ...properties);
}

/**
 * Creates a broadcast on home icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const broadcastOnHomeIcon = (...properties) => {
    const element = document.createElement('div');
    initBroadcastOnHomeIcon(element, ...properties);
    return element;
}
