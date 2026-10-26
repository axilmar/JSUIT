import { initIcon } from "./icon.js";

//the url of the ssid chart outlined svg; resolved relative to this module
const URL_SSIDCHARTOUTLINED = new URL('../../assets/icons/ssidChartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a ssid chart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ssidChartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSsidChartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SSIDCHARTOUTLINED }, ...properties);
}

/**
 * Creates a ssid chart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ssidChartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSsidChartOutlinedIcon(element, ...properties);
    return element;
}
