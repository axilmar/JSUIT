import { initIcon } from "./icon.js";

//the url of the wb shade svg; resolved relative to this module
const URL_WBSHADE = new URL('../../assets/icons/wbShade.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wb shade icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wbShade.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWbShadeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wbShadeIcon', url: URL_WBSHADE }, ...properties);
}

/**
 * Creates a wb shade icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wbShadeIcon = (...properties) => {
    const element = document.createElement('div');
    initWbShadeIcon(element, ...properties);
    return element;
}
