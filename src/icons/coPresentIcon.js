import { initIcon } from "./icon.js";

//the url of the co present svg; resolved relative to this module
const URL_COPRESENT = new URL('../../assets/icons/coPresent.svg', import.meta.url).href;

/**
 * Initializes an icon element as a co present icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/coPresent.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCoPresentIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'coPresentIcon', url: URL_COPRESENT }, ...properties);
}

/**
 * Creates a co present icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const coPresentIcon = (...properties) => {
    const element = document.createElement('div');
    initCoPresentIcon(element, ...properties);
    return element;
}
