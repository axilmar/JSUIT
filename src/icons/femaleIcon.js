import { initIcon } from "./icon.js";

//the url of the female svg; resolved relative to this module
const URL_FEMALE = new URL('../../assets/icons/female.svg', import.meta.url).href;

/**
 * Initializes an icon element as a female icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/female.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFemaleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FEMALE }, ...properties);
}

/**
 * Creates a female icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const femaleIcon = (...properties) => {
    const element = document.createElement('div');
    initFemaleIcon(element, ...properties);
    return element;
}
