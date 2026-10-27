import { initIcon } from "./icon.js";

//the url of the monochrome photos svg; resolved relative to this module
const URL_MONOCHROMEPHOTOS = new URL('../../assets/icons/monochromePhotos.svg', import.meta.url).href;

/**
 * Initializes an icon element as a monochrome photos icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/monochromePhotos.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMonochromePhotosIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'monochromePhotosIcon', url: URL_MONOCHROMEPHOTOS }, ...properties);
}

/**
 * Creates a monochrome photos icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const monochromePhotosIcon = (...properties) => {
    const element = document.createElement('div');
    initMonochromePhotosIcon(element, ...properties);
    return element;
}
