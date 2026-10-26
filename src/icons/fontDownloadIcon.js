import { initIcon } from "./icon.js";

//the url of the font download svg; resolved relative to this module
const URL_FONTDOWNLOAD = new URL('../../assets/icons/fontDownload.svg', import.meta.url).href;

/**
 * Initializes an icon element as a font download icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fontDownload.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFontDownloadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FONTDOWNLOAD }, ...properties);
}

/**
 * Creates a font download icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fontDownloadIcon = (...properties) => {
    const element = document.createElement('div');
    initFontDownloadIcon(element, ...properties);
    return element;
}
