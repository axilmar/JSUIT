import { initIcon } from "./icon.js";

//the url of the do not touch svg; resolved relative to this module
const URL_DONOTTOUCH = new URL('../../assets/icons/doNotTouch.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do not touch icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doNotTouch.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoNotTouchIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'doNotTouchIcon', url: URL_DONOTTOUCH }, ...properties);
}

/**
 * Creates a do not touch icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doNotTouchIcon = (...properties) => {
    const element = document.createElement('div');
    initDoNotTouchIcon(element, ...properties);
    return element;
}
