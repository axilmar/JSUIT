import { initIcon } from "./icon.js";

//the url of the broadcast on personal outlined svg; resolved relative to this module
const URL_BROADCASTONPERSONALOUTLINED = new URL('../../assets/icons/broadcastOnPersonalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a broadcast on personal outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/broadcastOnPersonalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBroadcastOnPersonalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BROADCASTONPERSONALOUTLINED }, ...properties);
}

/**
 * Creates a broadcast on personal outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const broadcastOnPersonalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBroadcastOnPersonalOutlinedIcon(element, ...properties);
    return element;
}
