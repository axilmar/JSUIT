import { initIcon } from "./icon.js";

//the url of the adb outlined svg; resolved relative to this module
const URL_ADBOUTLINED = new URL('../../assets/icons/adbOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an adb outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/adbOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAdbOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'adbOutlinedIcon', url: URL_ADBOUTLINED }, ...properties);
}

/**
 * Creates an adb outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const adbOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAdbOutlinedIcon(element, ...properties);
    return element;
}
