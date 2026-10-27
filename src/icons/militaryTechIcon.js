import { initIcon } from "./icon.js";

//the url of the military tech svg; resolved relative to this module
const URL_MILITARYTECH = new URL('../../assets/icons/militaryTech.svg', import.meta.url).href;

/**
 * Initializes an icon element as a military tech icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/militaryTech.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMilitaryTechIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'militaryTechIcon', url: URL_MILITARYTECH }, ...properties);
}

/**
 * Creates a military tech icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const militaryTechIcon = (...properties) => {
    const element = document.createElement('div');
    initMilitaryTechIcon(element, ...properties);
    return element;
}
