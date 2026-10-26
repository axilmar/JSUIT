import { initIcon } from "./icon.js";

//the url of the tv off svg; resolved relative to this module
const URL_TVOFF = new URL('../../assets/icons/tvOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tv off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tvOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTvOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TVOFF }, ...properties);
}

/**
 * Creates a tv off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tvOffIcon = (...properties) => {
    const element = document.createElement('div');
    initTvOffIcon(element, ...properties);
    return element;
}
