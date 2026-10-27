import { initIcon } from "./icon.js";

//the url of the female outlined svg; resolved relative to this module
const URL_FEMALEOUTLINED = new URL('../../assets/icons/femaleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a female outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/femaleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFemaleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'femaleOutlinedIcon', url: URL_FEMALEOUTLINED }, ...properties);
}

/**
 * Creates a female outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const femaleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFemaleOutlinedIcon(element, ...properties);
    return element;
}
