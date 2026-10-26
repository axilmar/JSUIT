import { initIcon } from "./icon.js";

//the url of the laptop chromebook svg; resolved relative to this module
const URL_LAPTOPCHROMEBOOK = new URL('../../assets/icons/laptopChromebook.svg', import.meta.url).href;

/**
 * Initializes an icon element as a laptop chromebook icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/laptopChromebook.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLaptopChromebookIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LAPTOPCHROMEBOOK }, ...properties);
}

/**
 * Creates a laptop chromebook icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const laptopChromebookIcon = (...properties) => {
    const element = document.createElement('div');
    initLaptopChromebookIcon(element, ...properties);
    return element;
}
