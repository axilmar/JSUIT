import { initIcon } from "./icon.js";

//the url of the solar power outlined svg; resolved relative to this module
const URL_SOLARPOWEROUTLINED = new URL('../../assets/icons/solarPowerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a solar power outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/solarPowerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSolarPowerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'solarPowerOutlinedIcon', url: URL_SOLARPOWEROUTLINED }, ...properties);
}

/**
 * Creates a solar power outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const solarPowerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSolarPowerOutlinedIcon(element, ...properties);
    return element;
}
