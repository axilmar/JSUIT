import { initIcon } from "./icon.js";

//the url of the do not touch outlined svg; resolved relative to this module
const URL_DONOTTOUCHOUTLINED = new URL('../../assets/icons/doNotTouchOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do not touch outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doNotTouchOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoNotTouchOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doNotTouchOutlinedIcon', url: URL_DONOTTOUCHOUTLINED }, ...properties);
}

/**
 * Creates a do not touch outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doNotTouchOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoNotTouchOutlinedIcon(element, ...properties);
    return element;
}
