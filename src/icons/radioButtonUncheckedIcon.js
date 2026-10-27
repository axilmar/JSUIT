import { initIcon } from "./icon.js";

//the url of the radio button unchecked svg; resolved relative to this module
const URL_RADIOBUTTONUNCHECKED = new URL('../../assets/icons/radioButtonUnchecked.svg', import.meta.url).href;

/**
 * Initializes an icon element as a radio button unchecked icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/radioButtonUnchecked.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRadioButtonUncheckedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'radioButtonUncheckedIcon', url: URL_RADIOBUTTONUNCHECKED }, ...properties);
}

/**
 * Creates a radio button unchecked icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const radioButtonUncheckedIcon = (...properties) => {
    const element = document.createElement('div');
    initRadioButtonUncheckedIcon(element, ...properties);
    return element;
}
