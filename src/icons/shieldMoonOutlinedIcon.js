import { initIcon } from "./icon.js";

//the url of the shield moon outlined svg; resolved relative to this module
const URL_SHIELDMOONOUTLINED = new URL('../../assets/icons/shieldMoonOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shield moon outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shieldMoonOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShieldMoonOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shieldMoonOutlinedIcon', url: URL_SHIELDMOONOUTLINED }, ...properties);
}

/**
 * Creates a shield moon outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shieldMoonOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShieldMoonOutlinedIcon(element, ...properties);
    return element;
}
