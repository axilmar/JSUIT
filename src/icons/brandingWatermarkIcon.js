import { initIcon } from "./icon.js";

//the url of the branding watermark svg; resolved relative to this module
const URL_BRANDINGWATERMARK = new URL('../../assets/icons/brandingWatermark.svg', import.meta.url).href;

/**
 * Initializes an icon element as a branding watermark icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brandingWatermark.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrandingWatermarkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'brandingWatermarkIcon', url: URL_BRANDINGWATERMARK }, ...properties);
}

/**
 * Creates a branding watermark icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brandingWatermarkIcon = (...properties) => {
    const element = document.createElement('div');
    initBrandingWatermarkIcon(element, ...properties);
    return element;
}
