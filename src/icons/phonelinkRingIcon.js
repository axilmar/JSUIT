import { initIcon } from "./icon.js";

//the url of the phonelink ring svg; resolved relative to this module
const URL_PHONELINKRING = new URL('../../assets/icons/phonelinkRing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phonelink ring icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phonelinkRing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhonelinkRingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phonelinkRingIcon', url: URL_PHONELINKRING }, ...properties);
}

/**
 * Creates a phonelink ring icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phonelinkRingIcon = (...properties) => {
    const element = document.createElement('div');
    initPhonelinkRingIcon(element, ...properties);
    return element;
}
