import { initIcon } from "./icon.js";

//the url of the text increase svg; resolved relative to this module
const URL_TEXTINCREASE = new URL('../../assets/icons/textIncrease.svg', import.meta.url).href;

/**
 * Initializes an icon element as a text increase icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/textIncrease.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextIncreaseIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'textIncreaseIcon', url: URL_TEXTINCREASE }, ...properties);
}

/**
 * Creates a text increase icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const textIncreaseIcon = (...properties) => {
    const element = document.createElement('div');
    initTextIncreaseIcon(element, ...properties);
    return element;
}
