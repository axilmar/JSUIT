import { initIcon } from "./icon.js";

//the url of the radio button checked outlined svg; resolved relative to this module
const URL_RADIOBUTTONCHECKEDOUTLINED = new URL('../../assets/icons/radioButtonCheckedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a radio button checked outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/radioButtonCheckedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRadioButtonCheckedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RADIOBUTTONCHECKEDOUTLINED }, ...properties);
}

/**
 * Creates a radio button checked outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const radioButtonCheckedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRadioButtonCheckedOutlinedIcon(element, ...properties);
    return element;
}
