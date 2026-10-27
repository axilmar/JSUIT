import { initIcon } from "./icon.js";

//the url of the laptop windows svg; resolved relative to this module
const URL_LAPTOPWINDOWS = new URL('../../assets/icons/laptopWindows.svg', import.meta.url).href;

/**
 * Initializes an icon element as a laptop windows icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/laptopWindows.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLaptopWindowsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'laptopWindowsIcon', url: URL_LAPTOPWINDOWS }, ...properties);
}

/**
 * Creates a laptop windows icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const laptopWindowsIcon = (...properties) => {
    const element = document.createElement('div');
    initLaptopWindowsIcon(element, ...properties);
    return element;
}
