import { initIcon } from "./icon.js";

//the url of the warning amber outlined svg; resolved relative to this module
const URL_WARNINGAMBEROUTLINED = new URL('../../assets/icons/warningAmberOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a warning amber outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/warningAmberOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWarningAmberOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WARNINGAMBEROUTLINED }, ...properties);
}

/**
 * Creates a warning amber outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const warningAmberOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWarningAmberOutlinedIcon(element, ...properties);
    return element;
}
