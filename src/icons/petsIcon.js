import { initIcon } from "./icon.js";

//the url of the pets svg; resolved relative to this module
const URL_PETS = new URL('../../assets/icons/pets.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pets icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pets.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPetsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PETS }, ...properties);
}

/**
 * Creates a pets icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const petsIcon = (...properties) => {
    const element = document.createElement('div');
    initPetsIcon(element, ...properties);
    return element;
}
