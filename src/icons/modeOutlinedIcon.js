import { initIcon } from "./icon.js";

//the url of the mode outlined svg; resolved relative to this module
const URL_MODEOUTLINED = new URL('../../assets/icons/modeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'modeOutlinedIcon', url: URL_MODEOUTLINED }, ...properties);
}

/**
 * Creates a mode outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initModeOutlinedIcon(element, ...properties);
    return element;
}
