import { initIcon } from "./icon.js";

//the url of the ssid chart svg; resolved relative to this module
const URL_SSIDCHART = new URL('../../assets/icons/ssidChart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a ssid chart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ssidChart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSsidChartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'ssidChartIcon', url: URL_SSIDCHART }, ...properties);
}

/**
 * Creates a ssid chart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ssidChartIcon = (...properties) => {
    const element = document.createElement('div');
    initSsidChartIcon(element, ...properties);
    return element;
}
