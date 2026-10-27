import { initIcon } from "./icon.js";

//the url of the smartphone outlined svg; resolved relative to this module
const URL_SMARTPHONEOUTLINED = new URL('../../assets/icons/smartphoneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a smartphone outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/smartphoneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSmartphoneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'smartphoneOutlinedIcon', url: URL_SMARTPHONEOUTLINED }, ...properties);
}

/**
 * Creates a smartphone outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const smartphoneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSmartphoneOutlinedIcon(element, ...properties);
    return element;
}
