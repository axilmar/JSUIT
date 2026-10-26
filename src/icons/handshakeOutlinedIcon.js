import { initIcon } from "./icon.js";

//the url of the handshake outlined svg; resolved relative to this module
const URL_HANDSHAKEOUTLINED = new URL('../../assets/icons/handshakeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a handshake outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/handshakeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHandshakeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HANDSHAKEOUTLINED }, ...properties);
}

/**
 * Creates a handshake outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const handshakeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHandshakeOutlinedIcon(element, ...properties);
    return element;
}
