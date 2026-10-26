import { initIcon } from "./icon.js";

//the url of the pets outlined svg; resolved relative to this module
const URL_PETSOUTLINED = new URL('../../assets/icons/petsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pets outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/petsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPetsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PETSOUTLINED }, ...properties);
}

/**
 * Creates a pets outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const petsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPetsOutlinedIcon(element, ...properties);
    return element;
}
