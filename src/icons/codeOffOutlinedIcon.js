import { initIcon } from "./icon.js";

//the url of the code off outlined svg; resolved relative to this module
const URL_CODEOFFOUTLINED = new URL('../../assets/icons/codeOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a code off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/codeOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCodeOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'codeOffOutlinedIcon', url: URL_CODEOFFOUTLINED }, ...properties);
}

/**
 * Creates a code off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const codeOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCodeOffOutlinedIcon(element, ...properties);
    return element;
}
