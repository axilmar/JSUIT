import { initIcon } from "./icon.js";

//the url of the home max outlined svg; resolved relative to this module
const URL_HOMEMAXOUTLINED = new URL('../../assets/icons/homeMaxOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a home max outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/homeMaxOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHomeMaxOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'homeMaxOutlinedIcon', url: URL_HOMEMAXOUTLINED }, ...properties);
}

/**
 * Creates a home max outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const homeMaxOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHomeMaxOutlinedIcon(element, ...properties);
    return element;
}
