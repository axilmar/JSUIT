import { initIcon } from "./icon.js";

//the url of the water drop outlined svg; resolved relative to this module
const URL_WATERDROPOUTLINED = new URL('../../assets/icons/waterDropOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a water drop outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/waterDropOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWaterDropOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'waterDropOutlinedIcon', url: URL_WATERDROPOUTLINED }, ...properties);
}

/**
 * Creates a water drop outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const waterDropOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWaterDropOutlinedIcon(element, ...properties);
    return element;
}
