import { initIcon } from "./icon.js";

//the url of the heat pump outlined svg; resolved relative to this module
const URL_HEATPUMPOUTLINED = new URL('../../assets/icons/heatPumpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a heat pump outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/heatPumpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeatPumpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'heatPumpOutlinedIcon', url: URL_HEATPUMPOUTLINED }, ...properties);
}

/**
 * Creates a heat pump outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const heatPumpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHeatPumpOutlinedIcon(element, ...properties);
    return element;
}
