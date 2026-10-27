import { initIcon } from "./icon.js";

//the url of the straight svg; resolved relative to this module
const URL_STRAIGHT = new URL('../../assets/icons/straight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a straight icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/straight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStraightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'straightIcon', url: URL_STRAIGHT }, ...properties);
}

/**
 * Creates a straight icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const straightIcon = (...properties) => {
    const element = document.createElement('div');
    initStraightIcon(element, ...properties);
    return element;
}
