import { initIcon } from "./icon.js";

//the url of the broadcast on personal svg; resolved relative to this module
const URL_BROADCASTONPERSONAL = new URL('../../assets/icons/broadcastOnPersonal.svg', import.meta.url).href;

/**
 * Initializes an icon element as a broadcast on personal icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/broadcastOnPersonal.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBroadcastOnPersonalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BROADCASTONPERSONAL }, ...properties);
}

/**
 * Creates a broadcast on personal icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const broadcastOnPersonalIcon = (...properties) => {
    const element = document.createElement('div');
    initBroadcastOnPersonalIcon(element, ...properties);
    return element;
}
