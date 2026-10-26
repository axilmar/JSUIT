import { initIcon } from "./icon.js";

//the url of the raw on svg; resolved relative to this module
const URL_RAWON = new URL('../../assets/icons/rawOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a raw on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rawOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRawOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RAWON }, ...properties);
}

/**
 * Creates a raw on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rawOnIcon = (...properties) => {
    const element = document.createElement('div');
    initRawOnIcon(element, ...properties);
    return element;
}
