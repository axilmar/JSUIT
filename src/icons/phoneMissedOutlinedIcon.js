import { initIcon } from "./icon.js";

//the url of the phone missed outlined svg; resolved relative to this module
const URL_PHONEMISSEDOUTLINED = new URL('../../assets/icons/phoneMissedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone missed outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneMissedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneMissedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phoneMissedOutlinedIcon', url: URL_PHONEMISSEDOUTLINED }, ...properties);
}

/**
 * Creates a phone missed outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneMissedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneMissedOutlinedIcon(element, ...properties);
    return element;
}
