import { initIcon } from "./icon.js";

//the url of the sim card outlined svg; resolved relative to this module
const URL_SIMCARDOUTLINED = new URL('../../assets/icons/simCardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sim card outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/simCardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSimCardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'simCardOutlinedIcon', url: URL_SIMCARDOUTLINED }, ...properties);
}

/**
 * Creates a sim card outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const simCardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSimCardOutlinedIcon(element, ...properties);
    return element;
}
