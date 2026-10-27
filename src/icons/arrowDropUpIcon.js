import { initIcon } from "./icon.js";

//the url of the arrow drop up svg; resolved relative to this module
const URL_ARROWDROPUP = new URL('../../assets/icons/arrowDropUp.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow drop up icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowDropUp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowDropUpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowDropUpIcon', url: URL_ARROWDROPUP }, ...properties);
}

/**
 * Creates an arrow drop up icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowDropUpIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowDropUpIcon(element, ...properties);
    return element;
}
