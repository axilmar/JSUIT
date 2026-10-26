import { initIcon } from "./icon.js";

//the url of the computer svg; resolved relative to this module
const URL_COMPUTER = new URL('../../assets/icons/computer.svg', import.meta.url).href;

/**
 * Initializes an icon element as a computer icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/computer.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initComputerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_COMPUTER }, ...properties);
}

/**
 * Creates a computer icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const computerIcon = (...properties) => {
    const element = document.createElement('div');
    initComputerIcon(element, ...properties);
    return element;
}
