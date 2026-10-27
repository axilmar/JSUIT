import { initIcon } from "./icon.js";

//the url of the phone disabled svg; resolved relative to this module
const URL_PHONEDISABLED = new URL('../../assets/icons/phoneDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phoneDisabledIcon', url: URL_PHONEDISABLED }, ...properties);
}

/**
 * Creates a phone disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneDisabledIcon(element, ...properties);
    return element;
}
