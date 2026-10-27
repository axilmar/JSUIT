import { initIcon } from "./icon.js";

//the url of the paragliding svg; resolved relative to this module
const URL_PARAGLIDING = new URL('../../assets/icons/paragliding.svg', import.meta.url).href;

/**
 * Initializes an icon element as a paragliding icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/paragliding.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initParaglidingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'paraglidingIcon', url: URL_PARAGLIDING }, ...properties);
}

/**
 * Creates a paragliding icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const paraglidingIcon = (...properties) => {
    const element = document.createElement('div');
    initParaglidingIcon(element, ...properties);
    return element;
}
