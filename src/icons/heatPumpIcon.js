import { initIcon } from "./icon.js";

//the url of the heat pump svg; resolved relative to this module
const URL_HEATPUMP = new URL('../../assets/icons/heatPump.svg', import.meta.url).href;

/**
 * Initializes an icon element as a heat pump icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/heatPump.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHeatPumpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'heatPumpIcon', url: URL_HEATPUMP }, ...properties);
}

/**
 * Creates a heat pump icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const heatPumpIcon = (...properties) => {
    const element = document.createElement('div');
    initHeatPumpIcon(element, ...properties);
    return element;
}
