import { initIcon } from "./icon.js";

//the url of the code svg; resolved relative to this module
const URL_CODE = new URL('../../assets/icons/code.svg', import.meta.url).href;

/**
 * Initializes an icon element as a code icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/code.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCodeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'codeIcon', url: URL_CODE }, ...properties);
}

/**
 * Creates a code icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const codeIcon = (...properties) => {
    const element = document.createElement('div');
    initCodeIcon(element, ...properties);
    return element;
}
