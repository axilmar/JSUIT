import { initIcon } from "./icon.js";

//the url of the phonelink off svg; resolved relative to this module
const URL_PHONELINKOFF = new URL('../../assets/icons/phonelinkOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phonelink off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phonelinkOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhonelinkOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phonelinkOffIcon', url: URL_PHONELINKOFF }, ...properties);
}

/**
 * Creates a phonelink off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phonelinkOffIcon = (...properties) => {
    const element = document.createElement('div');
    initPhonelinkOffIcon(element, ...properties);
    return element;
}
