import { initIcon } from "./icon.js";

//the url of the night shelter outlined svg; resolved relative to this module
const URL_NIGHTSHELTEROUTLINED = new URL('../../assets/icons/nightShelterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a night shelter outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nightShelterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNightShelterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NIGHTSHELTEROUTLINED }, ...properties);
}

/**
 * Creates a night shelter outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nightShelterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNightShelterOutlinedIcon(element, ...properties);
    return element;
}
