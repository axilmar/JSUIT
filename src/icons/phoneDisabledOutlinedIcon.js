import { initIcon } from "./icon.js";

//the url of the phone disabled outlined svg; resolved relative to this module
const URL_PHONEDISABLEDOUTLINED = new URL('../../assets/icons/phoneDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a phone disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/phoneDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhoneDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'phoneDisabledOutlinedIcon', url: URL_PHONEDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a phone disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const phoneDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhoneDisabledOutlinedIcon(element, ...properties);
    return element;
}
