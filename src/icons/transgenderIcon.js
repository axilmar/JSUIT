import { initIcon } from "./icon.js";

//the url of the transgender svg; resolved relative to this module
const URL_TRANSGENDER = new URL('../../assets/icons/transgender.svg', import.meta.url).href;

/**
 * Initializes an icon element as a transgender icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/transgender.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTransgenderIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'transgenderIcon', url: URL_TRANSGENDER }, ...properties);
}

/**
 * Creates a transgender icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const transgenderIcon = (...properties) => {
    const element = document.createElement('div');
    initTransgenderIcon(element, ...properties);
    return element;
}
