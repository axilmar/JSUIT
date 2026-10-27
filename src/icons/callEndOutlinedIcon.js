import { initIcon } from "./icon.js";

//the url of the call end outlined svg; resolved relative to this module
const URL_CALLENDOUTLINED = new URL('../../assets/icons/callEndOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call end outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callEndOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallEndOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'callEndOutlinedIcon', url: URL_CALLENDOUTLINED }, ...properties);
}

/**
 * Creates a call end outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callEndOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCallEndOutlinedIcon(element, ...properties);
    return element;
}
