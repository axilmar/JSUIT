import { initIcon } from "./icon.js";

//the url of the format size svg; resolved relative to this module
const URL_FORMATSIZE = new URL('../../assets/icons/formatSize.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format size icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatSize.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatSizeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatSizeIcon', url: URL_FORMATSIZE }, ...properties);
}

/**
 * Creates a format size icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatSizeIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatSizeIcon(element, ...properties);
    return element;
}
