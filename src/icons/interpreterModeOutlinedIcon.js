import { initIcon } from "./icon.js";

//the url of the interpreter mode outlined svg; resolved relative to this module
const URL_INTERPRETERMODEOUTLINED = new URL('../../assets/icons/interpreterModeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an interpreter mode outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/interpreterModeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInterpreterModeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INTERPRETERMODEOUTLINED }, ...properties);
}

/**
 * Creates an interpreter mode outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const interpreterModeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInterpreterModeOutlinedIcon(element, ...properties);
    return element;
}
