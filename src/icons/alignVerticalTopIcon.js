import { initIcon } from "./icon.js";

//the url of the align vertical top svg; resolved relative to this module
const URL_ALIGNVERTICALTOP = new URL('../../assets/icons/alignVerticalTop.svg', import.meta.url).href;

/**
 * Initializes an icon element as an align vertical top icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/alignVerticalTop.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAlignVerticalTopIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALIGNVERTICALTOP }, ...properties);
}

/**
 * Creates an align vertical top icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const alignVerticalTopIcon = (...properties) => {
    const element = document.createElement('div');
    initAlignVerticalTopIcon(element, ...properties);
    return element;
}
