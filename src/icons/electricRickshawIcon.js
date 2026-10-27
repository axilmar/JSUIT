import { initIcon } from "./icon.js";

//the url of the electric rickshaw svg; resolved relative to this module
const URL_ELECTRICRICKSHAW = new URL('../../assets/icons/electricRickshaw.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electric rickshaw icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricRickshaw.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricRickshawIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'electricRickshawIcon', url: URL_ELECTRICRICKSHAW }, ...properties);
}

/**
 * Creates an electric rickshaw icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricRickshawIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricRickshawIcon(element, ...properties);
    return element;
}
