import { initIcon } from "./icon.js";

//the url of the monitor heart outlined svg; resolved relative to this module
const URL_MONITORHEARTOUTLINED = new URL('../../assets/icons/monitorHeartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a monitor heart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/monitorHeartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMonitorHeartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MONITORHEARTOUTLINED }, ...properties);
}

/**
 * Creates a monitor heart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const monitorHeartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMonitorHeartOutlinedIcon(element, ...properties);
    return element;
}
