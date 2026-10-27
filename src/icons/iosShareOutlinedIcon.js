import { initIcon } from "./icon.js";

//the url of the ios share outlined svg; resolved relative to this module
const URL_IOSSHAREOUTLINED = new URL('../../assets/icons/iosShareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ios share outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/iosShareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIosShareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'iosShareOutlinedIcon', url: URL_IOSSHAREOUTLINED }, ...properties);
}

/**
 * Creates an ios share outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const iosShareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initIosShareOutlinedIcon(element, ...properties);
    return element;
}
