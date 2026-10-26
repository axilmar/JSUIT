import { initIcon } from "./icon.js";

//the url of the local atm svg; resolved relative to this module
const URL_LOCALATM = new URL('../../assets/icons/localAtm.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local atm icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localAtm.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalAtmIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALATM }, ...properties);
}

/**
 * Creates a local atm icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localAtmIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalAtmIcon(element, ...properties);
    return element;
}
