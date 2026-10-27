import { initIcon } from "./icon.js";

//the url of the vertical align top svg; resolved relative to this module
const URL_VERTICALALIGNTOP = new URL('../../assets/icons/verticalAlignTop.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vertical align top icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verticalAlignTop.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerticalAlignTopIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'verticalAlignTopIcon', url: URL_VERTICALALIGNTOP }, ...properties);
}

/**
 * Creates a vertical align top icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verticalAlignTopIcon = (...properties) => {
    const element = document.createElement('div');
    initVerticalAlignTopIcon(element, ...properties);
    return element;
}
