import { initIcon } from "./icon.js";

//the url of the adb svg; resolved relative to this module
const URL_ADB = new URL('../../assets/icons/adb.svg', import.meta.url).href;

/**
 * Initializes an icon element as an adb icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/adb.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAdbIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'adbIcon', url: URL_ADB }, ...properties);
}

/**
 * Creates an adb icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const adbIcon = (...properties) => {
    const element = document.createElement('div');
    initAdbIcon(element, ...properties);
    return element;
}
