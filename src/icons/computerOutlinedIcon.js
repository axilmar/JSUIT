import { initIcon } from "./icon.js";

//the url of the computer outlined svg; resolved relative to this module
const URL_COMPUTEROUTLINED = new URL('../../assets/icons/computerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a computer outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/computerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initComputerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'computerOutlinedIcon', url: URL_COMPUTEROUTLINED }, ...properties);
}

/**
 * Creates a computer outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const computerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initComputerOutlinedIcon(element, ...properties);
    return element;
}
