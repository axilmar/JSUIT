import { initIcon } from "./icon.js";

//the url of the android svg; resolved relative to this module
const URL_ANDROID = new URL('../../assets/icons/android.svg', import.meta.url).href;

/**
 * Initializes an icon element as an android icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/android.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAndroidIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'androidIcon', url: URL_ANDROID }, ...properties);
}

/**
 * Creates an android icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const androidIcon = (...properties) => {
    const element = document.createElement('div');
    initAndroidIcon(element, ...properties);
    return element;
}
