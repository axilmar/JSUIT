import { initIcon } from "./icon.js";

//the url of the hdr weak svg; resolved relative to this module
const URL_HDRWEAK = new URL('../../assets/icons/hdrWeak.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hdr weak icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hdrWeak.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHdrWeakIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hdrWeakIcon', url: URL_HDRWEAK }, ...properties);
}

/**
 * Creates a hdr weak icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hdrWeakIcon = (...properties) => {
    const element = document.createElement('div');
    initHdrWeakIcon(element, ...properties);
    return element;
}
