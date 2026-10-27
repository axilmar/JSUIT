import { initIcon } from "./icon.js";

//the url of the wrap text svg; resolved relative to this module
const URL_WRAPTEXT = new URL('../../assets/icons/wrapText.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wrap text icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wrapText.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWrapTextIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wrapTextIcon', url: URL_WRAPTEXT }, ...properties);
}

/**
 * Creates a wrap text icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wrapTextIcon = (...properties) => {
    const element = document.createElement('div');
    initWrapTextIcon(element, ...properties);
    return element;
}
