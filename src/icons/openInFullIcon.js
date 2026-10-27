import { initIcon } from "./icon.js";

//the url of the open in full svg; resolved relative to this module
const URL_OPENINFULL = new URL('../../assets/icons/openInFull.svg', import.meta.url).href;

/**
 * Initializes an icon element as an open in full icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/openInFull.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOpenInFullIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'openInFullIcon', url: URL_OPENINFULL }, ...properties);
}

/**
 * Creates an open in full icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const openInFullIcon = (...properties) => {
    const element = document.createElement('div');
    initOpenInFullIcon(element, ...properties);
    return element;
}
