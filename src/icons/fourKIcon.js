import { initIcon } from "./icon.js";

//the url of the four k svg; resolved relative to this module
const URL_FOURK = new URL('../../assets/icons/fourK.svg', import.meta.url).href;

/**
 * Initializes an icon element as a four k icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fourK.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFourKIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fourKIcon', url: URL_FOURK }, ...properties);
}

/**
 * Creates a four k icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fourKIcon = (...properties) => {
    const element = document.createElement('div');
    initFourKIcon(element, ...properties);
    return element;
}
