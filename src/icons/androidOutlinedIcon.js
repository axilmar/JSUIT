import { initIcon } from "./icon.js";

//the url of the android outlined svg; resolved relative to this module
const URL_ANDROIDOUTLINED = new URL('../../assets/icons/androidOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an android outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/androidOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAndroidOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'androidOutlinedIcon', url: URL_ANDROIDOUTLINED }, ...properties);
}

/**
 * Creates an android outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const androidOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAndroidOutlinedIcon(element, ...properties);
    return element;
}
