import { initIcon } from "./icon.js";

//the url of the roofing svg; resolved relative to this module
const URL_ROOFING = new URL('../../assets/icons/roofing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a roofing icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/roofing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRoofingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'roofingIcon', url: URL_ROOFING }, ...properties);
}

/**
 * Creates a roofing icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const roofingIcon = (...properties) => {
    const element = document.createElement('div');
    initRoofingIcon(element, ...properties);
    return element;
}
