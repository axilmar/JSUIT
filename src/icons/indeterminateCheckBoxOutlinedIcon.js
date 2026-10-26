import { initIcon } from "./icon.js";

//the url of the indeterminate check box outlined svg; resolved relative to this module
const URL_INDETERMINATECHECKBOXOUTLINED = new URL('../../assets/icons/indeterminateCheckBoxOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an indeterminate check box outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/indeterminateCheckBoxOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIndeterminateCheckBoxOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INDETERMINATECHECKBOXOUTLINED }, ...properties);
}

/**
 * Creates an indeterminate check box outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const indeterminateCheckBoxOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initIndeterminateCheckBoxOutlinedIcon(element, ...properties);
    return element;
}
