import { initIcon } from "./icon.js";

//the url of the monitor weight outlined svg; resolved relative to this module
const URL_MONITORWEIGHTOUTLINED = new URL('../../assets/icons/monitorWeightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a monitor weight outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/monitorWeightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMonitorWeightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MONITORWEIGHTOUTLINED }, ...properties);
}

/**
 * Creates a monitor weight outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const monitorWeightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMonitorWeightOutlinedIcon(element, ...properties);
    return element;
}
