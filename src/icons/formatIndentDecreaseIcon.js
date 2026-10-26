import { initIcon } from "./icon.js";

//the url of the format indent decrease svg; resolved relative to this module
const URL_FORMATINDENTDECREASE = new URL('../../assets/icons/formatIndentDecrease.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format indent decrease icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatIndentDecrease.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatIndentDecreaseIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATINDENTDECREASE }, ...properties);
}

/**
 * Creates a format indent decrease icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatIndentDecreaseIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatIndentDecreaseIcon(element, ...properties);
    return element;
}
