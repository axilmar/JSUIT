import { initIcon } from "./icon.js";

//the url of the co2 svg; resolved relative to this module
const URL_CO2 = new URL('../../assets/icons/co2.svg', import.meta.url).href;

/**
 * Initializes an icon element as a co2 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/co2.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCo2Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'co2Icon', url: URL_CO2 }, ...properties);
}

/**
 * Creates a co2 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const co2Icon = (...properties) => {
    const element = document.createElement('div');
    initCo2Icon(element, ...properties);
    return element;
}
