import { initIcon } from "./icon.js";

//the url of the wb auto svg; resolved relative to this module
const URL_WBAUTO = new URL('../../assets/icons/wbAuto.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb auto icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbAuto.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbAutoIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WBAUTO }, ...properties);
}

/**
 * Creates a wb auto icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbAutoIcon = (...properties) => {
    const element = document.createElement('div');
    initWbAutoIcon(element, ...properties);
    return element;
}
