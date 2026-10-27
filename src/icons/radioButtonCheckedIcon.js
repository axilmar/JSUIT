import { initIcon } from "./icon.js";

//the url of the radio button checked svg; resolved relative to this module
const URL_RADIOBUTTONCHECKED = new URL('../../assets/icons/radioButtonChecked.svg', import.meta.url).href;

/**
 * Initializes an icon element as a radio button checked icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/radioButtonChecked.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRadioButtonCheckedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'radioButtonCheckedIcon', url: URL_RADIOBUTTONCHECKED }, ...properties);
}

/**
 * Creates a radio button checked icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const radioButtonCheckedIcon = (...properties) => {
    const element = document.createElement('div');
    initRadioButtonCheckedIcon(element, ...properties);
    return element;
}
