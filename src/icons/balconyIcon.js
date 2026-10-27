import { initIcon } from "./icon.js";

//the url of the balcony svg; resolved relative to this module
const URL_BALCONY = new URL('../../assets/icons/balcony.svg', import.meta.url).href;

/**
 * Initializes an icon element as a balcony icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/balcony.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBalconyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'balconyIcon', url: URL_BALCONY }, ...properties);
}

/**
 * Creates a balcony icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const balconyIcon = (...properties) => {
    const element = document.createElement('div');
    initBalconyIcon(element, ...properties);
    return element;
}
