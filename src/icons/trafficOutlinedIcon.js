import { initIcon } from "./icon.js";

//the url of the traffic outlined svg; resolved relative to this module
const URL_TRAFFICOUTLINED = new URL('../../assets/icons/trafficOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a traffic outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/trafficOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTrafficOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TRAFFICOUTLINED }, ...properties);
}

/**
 * Creates a traffic outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const trafficOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTrafficOutlinedIcon(element, ...properties);
    return element;
}
