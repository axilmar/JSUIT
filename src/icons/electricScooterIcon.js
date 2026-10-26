import { initIcon } from "./icon.js";

//the url of the electric scooter svg; resolved relative to this module
const URL_ELECTRICSCOOTER = new URL('../../assets/icons/electricScooter.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electric scooter icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricScooter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricScooterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ELECTRICSCOOTER }, ...properties);
}

/**
 * Creates an electric scooter icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricScooterIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricScooterIcon(element, ...properties);
    return element;
}
