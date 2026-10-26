import { initIcon } from "./icon.js";

//the url of the mode standby outlined svg; resolved relative to this module
const URL_MODESTANDBYOUTLINED = new URL('../../assets/icons/modeStandbyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode standby outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modeStandbyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeStandbyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MODESTANDBYOUTLINED }, ...properties);
}

/**
 * Creates a mode standby outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeStandbyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initModeStandbyOutlinedIcon(element, ...properties);
    return element;
}
