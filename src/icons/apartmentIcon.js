import { initIcon } from "./icon.js";

//the url of the apartment svg; resolved relative to this module
const URL_APARTMENT = new URL('../../assets/icons/apartment.svg', import.meta.url).href;

/**
 * Initializes an icon element as an apartment icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/apartment.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initApartmentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'apartmentIcon', url: URL_APARTMENT }, ...properties);
}

/**
 * Creates an apartment icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const apartmentIcon = (...properties) => {
    const element = document.createElement('div');
    initApartmentIcon(element, ...properties);
    return element;
}
