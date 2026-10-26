import { initIcon } from "./icon.js";

//the url of the electric rickshaw outlined svg; resolved relative to this module
const URL_ELECTRICRICKSHAWOUTLINED = new URL('../../assets/icons/electricRickshawOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electric rickshaw outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricRickshawOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricRickshawOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ELECTRICRICKSHAWOUTLINED }, ...properties);
}

/**
 * Creates an electric rickshaw outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricRickshawOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricRickshawOutlinedIcon(element, ...properties);
    return element;
}
