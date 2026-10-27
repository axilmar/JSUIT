import { initIcon } from "./icon.js";

//the url of the thumb down alt svg; resolved relative to this module
const URL_THUMBDOWNALT = new URL('../../assets/icons/thumbDownAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thumb down alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thumbDownAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThumbDownAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'thumbDownAltIcon', url: URL_THUMBDOWNALT }, ...properties);
}

/**
 * Creates a thumb down alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thumbDownAltIcon = (...properties) => {
    const element = document.createElement('div');
    initThumbDownAltIcon(element, ...properties);
    return element;
}
