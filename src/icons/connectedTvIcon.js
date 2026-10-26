import { initIcon } from "./icon.js";

//the url of the connected tv svg; resolved relative to this module
const URL_CONNECTEDTV = new URL('../../assets/icons/connectedTv.svg', import.meta.url).href;

/**
 * Initializes an icon element as a connected tv icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/connectedTv.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initConnectedTvIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONNECTEDTV }, ...properties);
}

/**
 * Creates a connected tv icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const connectedTvIcon = (...properties) => {
    const element = document.createElement('div');
    initConnectedTvIcon(element, ...properties);
    return element;
}
