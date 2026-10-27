import { initIcon } from "./icon.js";

//the url of the night shelter svg; resolved relative to this module
const URL_NIGHTSHELTER = new URL('../../assets/icons/nightShelter.svg', import.meta.url).href;

/**
 * Initializes an icon element as a night shelter icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nightShelter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNightShelterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nightShelterIcon', url: URL_NIGHTSHELTER }, ...properties);
}

/**
 * Creates a night shelter icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nightShelterIcon = (...properties) => {
    const element = document.createElement('div');
    initNightShelterIcon(element, ...properties);
    return element;
}
