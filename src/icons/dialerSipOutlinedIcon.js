import { initIcon } from "./icon.js";

//the url of the dialer sip outlined svg; resolved relative to this module
const URL_DIALERSIPOUTLINED = new URL('../../assets/icons/dialerSipOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dialer sip outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dialerSipOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDialerSipOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dialerSipOutlinedIcon', url: URL_DIALERSIPOUTLINED }, ...properties);
}

/**
 * Creates a dialer sip outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dialerSipOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDialerSipOutlinedIcon(element, ...properties);
    return element;
}
