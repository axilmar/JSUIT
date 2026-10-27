import { initIcon } from "./icon.js";

//the url of the font download outlined svg; resolved relative to this module
const URL_FONTDOWNLOADOUTLINED = new URL('../../assets/icons/fontDownloadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a font download outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fontDownloadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFontDownloadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fontDownloadOutlinedIcon', url: URL_FONTDOWNLOADOUTLINED }, ...properties);
}

/**
 * Creates a font download outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fontDownloadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFontDownloadOutlinedIcon(element, ...properties);
    return element;
}
