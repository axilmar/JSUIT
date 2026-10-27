import { initIcon } from "./icon.js";

//the url of the person off outlined svg; resolved relative to this module
const URL_PERSONOFFOUTLINED = new URL('../../assets/icons/personOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'personOffOutlinedIcon', url: URL_PERSONOFFOUTLINED }, ...properties);
}

/**
 * Creates a person off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonOffOutlinedIcon(element, ...properties);
    return element;
}
