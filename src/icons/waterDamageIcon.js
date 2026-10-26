import { initIcon } from "./icon.js";

//the url of the water damage svg; resolved relative to this module
const URL_WATERDAMAGE = new URL('../../assets/icons/waterDamage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a water damage icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/waterDamage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWaterDamageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WATERDAMAGE }, ...properties);
}

/**
 * Creates a water damage icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const waterDamageIcon = (...properties) => {
    const element = document.createElement('div');
    initWaterDamageIcon(element, ...properties);
    return element;
}
