import { initIcon } from "./icon.js";

//the url of the auto mode outlined svg; resolved relative to this module
const URL_AUTOMODEOUTLINED = new URL('../../assets/icons/autoModeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto mode outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoModeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoModeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AUTOMODEOUTLINED }, ...properties);
}

/**
 * Creates an auto mode outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoModeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoModeOutlinedIcon(element, ...properties);
    return element;
}
