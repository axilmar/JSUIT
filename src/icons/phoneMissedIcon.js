import { initIcon } from "./icon.js";

//the url of the phone missed svg; resolved relative to this module
const URL_PHONEMISSED = new URL('../../assets/icons/phoneMissed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone missed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneMissed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneMissedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phoneMissedIcon', url: URL_PHONEMISSED }, ...properties);
}

/**
 * Creates a phone missed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneMissedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneMissedIcon(element, ...properties);
    return element;
}
