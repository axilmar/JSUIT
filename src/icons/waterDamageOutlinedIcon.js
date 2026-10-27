import { initIcon } from "./icon.js";

//the url of the water damage outlined svg; resolved relative to this module
const URL_WATERDAMAGEOUTLINED = new URL('../../assets/icons/waterDamageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a water damage outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/waterDamageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWaterDamageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'waterDamageOutlinedIcon', url: URL_WATERDAMAGEOUTLINED }, ...properties);
}

/**
 * Creates a water damage outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const waterDamageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWaterDamageOutlinedIcon(element, ...properties);
    return element;
}
