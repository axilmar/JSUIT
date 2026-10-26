import { initIcon } from "./icon.js";

//the url of the phone enabled outlined svg; resolved relative to this module
const URL_PHONEENABLEDOUTLINED = new URL('../../assets/icons/phoneEnabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone enabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneEnabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneEnabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHONEENABLEDOUTLINED }, ...properties);
}

/**
 * Creates a phone enabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneEnabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneEnabledOutlinedIcon(element, ...properties);
    return element;
}
