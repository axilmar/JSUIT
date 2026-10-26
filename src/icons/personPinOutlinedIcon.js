import { initIcon } from "./icon.js";

//the url of the person pin outlined svg; resolved relative to this module
const URL_PERSONPINOUTLINED = new URL('../../assets/icons/personPinOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person pin outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personPinOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonPinOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERSONPINOUTLINED }, ...properties);
}

/**
 * Creates a person pin outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personPinOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonPinOutlinedIcon(element, ...properties);
    return element;
}
