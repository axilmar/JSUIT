import { initIcon } from "./icon.js";

//the url of the dialer sip svg; resolved relative to this module
const URL_DIALERSIP = new URL('../../assets/icons/dialerSip.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dialer sip icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dialerSip.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDialerSipIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIALERSIP }, ...properties);
}

/**
 * Creates a dialer sip icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dialerSipIcon = (...properties) => {
    const element = document.createElement('div');
    initDialerSipIcon(element, ...properties);
    return element;
}
