import { initIcon } from "./icon.js";

//the url of the wind power svg; resolved relative to this module
const URL_WINDPOWER = new URL('../../assets/icons/windPower.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wind power icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/windPower.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWindPowerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WINDPOWER }, ...properties);
}

/**
 * Creates a wind power icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const windPowerIcon = (...properties) => {
    const element = document.createElement('div');
    initWindPowerIcon(element, ...properties);
    return element;
}
