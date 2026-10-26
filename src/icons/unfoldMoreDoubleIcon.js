import { initIcon } from "./icon.js";

//the url of the unfold more double svg; resolved relative to this module
const URL_UNFOLDMOREDOUBLE = new URL('../../assets/icons/unfoldMoreDouble.svg', import.meta.url).href;

/**
 * Initializes an icon element as an unfold more double icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/unfoldMoreDouble.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUnfoldMoreDoubleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UNFOLDMOREDOUBLE }, ...properties);
}

/**
 * Creates an unfold more double icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const unfoldMoreDoubleIcon = (...properties) => {
    const element = document.createElement('div');
    initUnfoldMoreDoubleIcon(element, ...properties);
    return element;
}
