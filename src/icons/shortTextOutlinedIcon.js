import { initIcon } from "./icon.js";

//the url of the short text outlined svg; resolved relative to this module
const URL_SHORTTEXTOUTLINED = new URL('../../assets/icons/shortTextOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a short text outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shortTextOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShortTextOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shortTextOutlinedIcon', url: URL_SHORTTEXTOUTLINED }, ...properties);
}

/**
 * Creates a short text outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shortTextOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShortTextOutlinedIcon(element, ...properties);
    return element;
}
