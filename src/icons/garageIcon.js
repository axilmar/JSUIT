import { initIcon } from "./icon.js";

//the url of the garage svg; resolved relative to this module
const URL_GARAGE = new URL('../../assets/icons/garage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a garage icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/garage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGarageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'garageIcon', url: URL_GARAGE }, ...properties);
}

/**
 * Creates a garage icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const garageIcon = (...properties) => {
    const element = document.createElement('div');
    initGarageIcon(element, ...properties);
    return element;
}
