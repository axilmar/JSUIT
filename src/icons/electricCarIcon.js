import { initIcon } from "./icon.js";

//the url of the electric car svg; resolved relative to this module
const URL_ELECTRICCAR = new URL('../../assets/icons/electricCar.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electric car icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricCar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricCarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ELECTRICCAR }, ...properties);
}

/**
 * Creates an electric car icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricCarIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricCarIcon(element, ...properties);
    return element;
}
