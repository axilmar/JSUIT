import { initIcon } from "./icon.js";

//the url of the broadcast on home outlined svg; resolved relative to this module
const URL_BROADCASTONHOMEOUTLINED = new URL('../../assets/icons/broadcastOnHomeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a broadcast on home outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/broadcastOnHomeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBroadcastOnHomeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'broadcastOnHomeOutlinedIcon', url: URL_BROADCASTONHOMEOUTLINED }, ...properties);
}

/**
 * Creates a broadcast on home outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const broadcastOnHomeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBroadcastOnHomeOutlinedIcon(element, ...properties);
    return element;
}
