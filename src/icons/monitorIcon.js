import { initIcon } from "./icon.js";

//the url of the monitor svg; resolved relative to this module
const URL_MONITOR = new URL('../../assets/icons/monitor.svg', import.meta.url).href;

/**
 * Initializes an icon element as a monitor icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/monitor.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMonitorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MONITOR }, ...properties);
}

/**
 * Creates a monitor icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const monitorIcon = (...properties) => {
    const element = document.createElement('div');
    initMonitorIcon(element, ...properties);
    return element;
}
