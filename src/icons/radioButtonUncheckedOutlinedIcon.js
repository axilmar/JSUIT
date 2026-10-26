import { initIcon } from "./icon.js";

//the url of the radio button unchecked outlined svg; resolved relative to this module
const URL_RADIOBUTTONUNCHECKEDOUTLINED = new URL('../../assets/icons/radioButtonUncheckedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a radio button unchecked outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/radioButtonUncheckedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRadioButtonUncheckedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RADIOBUTTONUNCHECKEDOUTLINED }, ...properties);
}

/**
 * Creates a radio button unchecked outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const radioButtonUncheckedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRadioButtonUncheckedOutlinedIcon(element, ...properties);
    return element;
}
