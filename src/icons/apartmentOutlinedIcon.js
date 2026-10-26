import { initIcon } from "./icon.js";

//the url of the apartment outlined svg; resolved relative to this module
const URL_APARTMENTOUTLINED = new URL('../../assets/icons/apartmentOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an apartment outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/apartmentOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initApartmentOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_APARTMENTOUTLINED }, ...properties);
}

/**
 * Creates an apartment outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const apartmentOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initApartmentOutlinedIcon(element, ...properties);
    return element;
}
