import { initIcon } from "./icon.js";

//the url of the shield outlined svg; resolved relative to this module
const URL_SHIELDOUTLINED = new URL('../../assets/icons/shieldOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a shield outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shieldOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShieldOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shieldOutlinedIcon', url: URL_SHIELDOUTLINED }, ...properties);
}

/**
 * Creates a shield outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shieldOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShieldOutlinedIcon(element, ...properties);
    return element;
}
