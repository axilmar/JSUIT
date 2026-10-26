import { initIcon } from "./icon.js";

//the url of the bike scooter outlined svg; resolved relative to this module
const URL_BIKESCOOTEROUTLINED = new URL('../../assets/icons/bikeScooterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bike scooter outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bikeScooterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBikeScooterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BIKESCOOTEROUTLINED }, ...properties);
}

/**
 * Creates a bike scooter outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bikeScooterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBikeScooterOutlinedIcon(element, ...properties);
    return element;
}
