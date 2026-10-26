import { initIcon } from "./icon.js";

//the url of the vaccines outlined svg; resolved relative to this module
const URL_VACCINESOUTLINED = new URL('../../assets/icons/vaccinesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vaccines outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vaccinesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVaccinesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VACCINESOUTLINED }, ...properties);
}

/**
 * Creates a vaccines outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vaccinesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVaccinesOutlinedIcon(element, ...properties);
    return element;
}
