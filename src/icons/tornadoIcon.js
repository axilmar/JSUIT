import { initIcon } from "./icon.js";

//the url of the tornado svg; resolved relative to this module
const URL_TORNADO = new URL('../../assets/icons/tornado.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tornado icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tornado.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTornadoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TORNADO }, ...properties);
}

/**
 * Creates a tornado icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tornadoIcon = (...properties) => {
    const element = document.createElement('div');
    initTornadoIcon(element, ...properties);
    return element;
}
