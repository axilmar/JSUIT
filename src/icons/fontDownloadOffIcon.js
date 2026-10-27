import { initIcon } from "./icon.js";

//the url of the font download off svg; resolved relative to this module
const URL_FONTDOWNLOADOFF = new URL('../../assets/icons/fontDownloadOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a font download off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fontDownloadOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFontDownloadOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fontDownloadOffIcon', url: URL_FONTDOWNLOADOFF }, ...properties);
}

/**
 * Creates a font download off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fontDownloadOffIcon = (...properties) => {
    const element = document.createElement('div');
    initFontDownloadOffIcon(element, ...properties);
    return element;
}
