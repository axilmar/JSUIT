import { initIcon } from "./icon.js";

//the url of the outbound outlined svg; resolved relative to this module
const URL_OUTBOUNDOUTLINED = new URL('../../assets/icons/outboundOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an outbound outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/outboundOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutboundOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OUTBOUNDOUTLINED }, ...properties);
}

/**
 * Creates an outbound outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const outboundOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initOutboundOutlinedIcon(element, ...properties);
    return element;
}
