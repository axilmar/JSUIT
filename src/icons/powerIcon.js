import { initIcon } from "./icon.js";

//the url of the power svg; resolved relative to this module
const URL_POWER = new URL('../../assets/icons/power.svg', import.meta.url).href;

/**
 * Initializes an icon element as a power icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/power.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPowerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_POWER }, ...properties);
}

/**
 * Creates a power icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const powerIcon = (...properties) => {
    const element = document.createElement('div');
    initPowerIcon(element, ...properties);
    return element;
}
