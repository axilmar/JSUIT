import { initIcon } from "./icon.js";

//the url of the share svg; resolved relative to this module
const URL_SHARE = new URL('../../assets/icons/share.svg', import.meta.url).href;

/**
 * Initializes an icon element as a share icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/share.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShareIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shareIcon', url: URL_SHARE }, ...properties);
}

/**
 * Creates a share icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shareIcon = (...properties) => {
    const element = document.createElement('div');
    initShareIcon(element, ...properties);
    return element;
}
