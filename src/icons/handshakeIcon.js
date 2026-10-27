import { initIcon } from "./icon.js";

//the url of the handshake svg; resolved relative to this module
const URL_HANDSHAKE = new URL('../../assets/icons/handshake.svg', import.meta.url).href;

/**
 * Initializes an icon element as a handshake icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/handshake.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHandshakeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'handshakeIcon', url: URL_HANDSHAKE }, ...properties);
}

/**
 * Creates a handshake icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const handshakeIcon = (...properties) => {
    const element = document.createElement('div');
    initHandshakeIcon(element, ...properties);
    return element;
}
