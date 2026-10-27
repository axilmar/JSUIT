import { initIcon } from "./icon.js";

//the url of the unfold less double svg; resolved relative to this module
const URL_UNFOLDLESSDOUBLE = new URL('../../assets/icons/unfoldLessDouble.svg', import.meta.url).href;

/**
 * Initializes an icon element as an unfold less double icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/unfoldLessDouble.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUnfoldLessDoubleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'unfoldLessDoubleIcon', url: URL_UNFOLDLESSDOUBLE }, ...properties);
}

/**
 * Creates an unfold less double icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const unfoldLessDoubleIcon = (...properties) => {
    const element = document.createElement('div');
    initUnfoldLessDoubleIcon(element, ...properties);
    return element;
}
