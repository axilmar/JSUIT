import { initIcon } from "./icon.js";

//the url of the electric meter outlined svg; resolved relative to this module
const URL_ELECTRICMETEROUTLINED = new URL('../../assets/icons/electricMeterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electric meter outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricMeterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricMeterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ELECTRICMETEROUTLINED }, ...properties);
}

/**
 * Creates an electric meter outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricMeterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricMeterOutlinedIcon(element, ...properties);
    return element;
}
