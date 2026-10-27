import { initIcon } from "./icon.js";

//the url of the access time filled svg; resolved relative to this module
const URL_ACCESSTIMEFILLED = new URL('../../assets/icons/accessTimeFilled.svg', import.meta.url).href;

/**
 * Initializes an icon element as an access time filled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accessTimeFilled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccessTimeFilledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accessTimeFilledIcon', url: URL_ACCESSTIMEFILLED }, ...properties);
}

/**
 * Creates an access time filled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accessTimeFilledIcon = (...properties) => {
    const element = document.createElement('div');
    initAccessTimeFilledIcon(element, ...properties);
    return element;
}
