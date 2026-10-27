import { initIcon } from "./icon.js";

//the url of the electrical services outlined svg; resolved relative to this module
const URL_ELECTRICALSERVICESOUTLINED = new URL('../../assets/icons/electricalServicesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electrical services outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricalServicesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricalServicesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'electricalServicesOutlinedIcon', url: URL_ELECTRICALSERVICESOUTLINED }, ...properties);
}

/**
 * Creates an electrical services outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricalServicesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricalServicesOutlinedIcon(element, ...properties);
    return element;
}
