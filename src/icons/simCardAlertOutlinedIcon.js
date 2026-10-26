import { initIcon } from "./icon.js";

//the url of the sim card alert outlined svg; resolved relative to this module
const URL_SIMCARDALERTOUTLINED = new URL('../../assets/icons/simCardAlertOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sim card alert outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/simCardAlertOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSimCardAlertOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIMCARDALERTOUTLINED }, ...properties);
}

/**
 * Creates a sim card alert outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const simCardAlertOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSimCardAlertOutlinedIcon(element, ...properties);
    return element;
}
