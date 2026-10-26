import { initIcon } from "./icon.js";

//the url of the developer mode outlined svg; resolved relative to this module
const URL_DEVELOPERMODEOUTLINED = new URL('../../assets/icons/developerModeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a developer mode outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/developerModeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeveloperModeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DEVELOPERMODEOUTLINED }, ...properties);
}

/**
 * Creates a developer mode outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const developerModeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeveloperModeOutlinedIcon(element, ...properties);
    return element;
}
