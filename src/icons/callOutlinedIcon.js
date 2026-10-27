import { initIcon } from "./icon.js";

//the url of the call outlined svg; resolved relative to this module
const URL_CALLOUTLINED = new URL('../../assets/icons/callOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a call outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/callOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCallOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'callOutlinedIcon', url: URL_CALLOUTLINED }, ...properties);
}

/**
 * Creates a call outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const callOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCallOutlinedIcon(element, ...properties);
    return element;
}
