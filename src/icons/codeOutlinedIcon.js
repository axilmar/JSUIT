import { initIcon } from "./icon.js";

//the url of the code outlined svg; resolved relative to this module
const URL_CODEOUTLINED = new URL('../../assets/icons/codeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a code outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/codeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCodeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'codeOutlinedIcon', url: URL_CODEOUTLINED }, ...properties);
}

/**
 * Creates a code outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const codeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCodeOutlinedIcon(element, ...properties);
    return element;
}
