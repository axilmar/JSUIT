import { initIcon } from "./icon.js";

//the url of the font download off outlined svg; resolved relative to this module
const URL_FONTDOWNLOADOFFOUTLINED = new URL('../../assets/icons/fontDownloadOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a font download off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fontDownloadOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFontDownloadOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FONTDOWNLOADOFFOUTLINED }, ...properties);
}

/**
 * Creates a font download off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fontDownloadOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFontDownloadOffOutlinedIcon(element, ...properties);
    return element;
}
