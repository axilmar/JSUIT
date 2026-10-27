import { initIcon } from "./icon.js";

//the url of the disc full svg; resolved relative to this module
const URL_DISCFULL = new URL('../../assets/icons/discFull.svg', import.meta.url).href;

/**
 * Initializes an icon element as a disc full icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/discFull.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDiscFullIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'discFullIcon', url: URL_DISCFULL }, ...properties);
}

/**
 * Creates a disc full icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const discFullIcon = (...properties) => {
    const element = document.createElement('div');
    initDiscFullIcon(element, ...properties);
    return element;
}
