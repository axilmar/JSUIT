import { initIcon } from "./icon.js";

//the url of the blinds closed svg; resolved relative to this module
const URL_BLINDSCLOSED = new URL('../../assets/icons/blindsClosed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a blinds closed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/blindsClosed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBlindsClosedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'blindsClosedIcon', url: URL_BLINDSCLOSED }, ...properties);
}

/**
 * Creates a blinds closed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const blindsClosedIcon = (...properties) => {
    const element = document.createElement('div');
    initBlindsClosedIcon(element, ...properties);
    return element;
}
