import { initIcon } from "./icon.js";

//the url of the text decrease svg; resolved relative to this module
const URL_TEXTDECREASE = new URL('../../assets/icons/textDecrease.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text decrease icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textDecrease.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextDecreaseIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'textDecreaseIcon', url: URL_TEXTDECREASE }, ...properties);
}

/**
 * Creates a text decrease icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textDecreaseIcon = (...properties) => {
    const element = document.createElement('div');
    initTextDecreaseIcon(element, ...properties);
    return element;
}
