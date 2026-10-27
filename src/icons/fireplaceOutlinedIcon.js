import { initIcon } from "./icon.js";

//the url of the fireplace outlined svg; resolved relative to this module
const URL_FIREPLACEOUTLINED = new URL('../../assets/icons/fireplaceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fireplace outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fireplaceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFireplaceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fireplaceOutlinedIcon', url: URL_FIREPLACEOUTLINED }, ...properties);
}

/**
 * Creates a fireplace outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fireplaceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFireplaceOutlinedIcon(element, ...properties);
    return element;
}
