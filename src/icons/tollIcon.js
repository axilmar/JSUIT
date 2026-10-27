import { initIcon } from "./icon.js";

//the url of the toll svg; resolved relative to this module
const URL_TOLL = new URL('../../assets/icons/toll.svg', import.meta.url).href;

/**
 * Initializes an icon element as a toll icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/toll.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTollIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tollIcon', url: URL_TOLL }, ...properties);
}

/**
 * Creates a toll icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tollIcon = (...properties) => {
    const element = document.createElement('div');
    initTollIcon(element, ...properties);
    return element;
}
