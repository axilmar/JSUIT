import { initIcon } from "./icon.js";

//the url of the mode of travel outlined svg; resolved relative to this module
const URL_MODEOFTRAVELOUTLINED = new URL('../../assets/icons/modeOfTravelOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode of travel outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modeOfTravelOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeOfTravelOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'modeOfTravelOutlinedIcon', url: URL_MODEOFTRAVELOUTLINED }, ...properties);
}

/**
 * Creates a mode of travel outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeOfTravelOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initModeOfTravelOutlinedIcon(element, ...properties);
    return element;
}
