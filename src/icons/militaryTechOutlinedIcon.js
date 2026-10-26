import { initIcon } from "./icon.js";

//the url of the military tech outlined svg; resolved relative to this module
const URL_MILITARYTECHOUTLINED = new URL('../../assets/icons/militaryTechOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a military tech outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/militaryTechOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMilitaryTechOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MILITARYTECHOUTLINED }, ...properties);
}

/**
 * Creates a military tech outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const militaryTechOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMilitaryTechOutlinedIcon(element, ...properties);
    return element;
}
