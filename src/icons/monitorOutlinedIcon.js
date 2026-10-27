import { initIcon } from "./icon.js";

//the url of the monitor outlined svg; resolved relative to this module
const URL_MONITOROUTLINED = new URL('../../assets/icons/monitorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a monitor outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/monitorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMonitorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'monitorOutlinedIcon', url: URL_MONITOROUTLINED }, ...properties);
}

/**
 * Creates a monitor outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const monitorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMonitorOutlinedIcon(element, ...properties);
    return element;
}
