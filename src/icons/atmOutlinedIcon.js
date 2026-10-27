import { initIcon } from "./icon.js";

//the url of the atm outlined svg; resolved relative to this module
const URL_ATMOUTLINED = new URL('../../assets/icons/atmOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an atm outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/atmOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAtmOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'atmOutlinedIcon', url: URL_ATMOUTLINED }, ...properties);
}

/**
 * Creates an atm outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const atmOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAtmOutlinedIcon(element, ...properties);
    return element;
}
