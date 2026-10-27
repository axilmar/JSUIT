import { initIcon } from "./icon.js";

//the url of the sip outlined svg; resolved relative to this module
const URL_SIPOUTLINED = new URL('../../assets/icons/sipOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sip outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sipOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSipOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sipOutlinedIcon', url: URL_SIPOUTLINED }, ...properties);
}

/**
 * Creates a sip outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sipOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSipOutlinedIcon(element, ...properties);
    return element;
}
