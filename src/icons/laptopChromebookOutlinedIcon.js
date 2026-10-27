import { initIcon } from "./icon.js";

//the url of the laptop chromebook outlined svg; resolved relative to this module
const URL_LAPTOPCHROMEBOOKOUTLINED = new URL('../../assets/icons/laptopChromebookOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a laptop chromebook outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/laptopChromebookOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLaptopChromebookOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'laptopChromebookOutlinedIcon', url: URL_LAPTOPCHROMEBOOKOUTLINED }, ...properties);
}

/**
 * Creates a laptop chromebook outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const laptopChromebookOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLaptopChromebookOutlinedIcon(element, ...properties);
    return element;
}
