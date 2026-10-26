import { initIcon } from "./icon.js";

//the url of the check box outline blank svg; resolved relative to this module
const URL_CHECKBOXOUTLINEBLANK = new URL('../../assets/icons/checkBoxOutlineBlank.svg', import.meta.url).href;

/**
 * Initializes an icon element as a check box outline blank icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checkBoxOutlineBlank.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCheckBoxOutlineBlankIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHECKBOXOUTLINEBLANK }, ...properties);
}

/**
 * Creates a check box outline blank icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checkBoxOutlineBlankIcon = (...properties) => {
    const element = document.createElement('div');
    initCheckBoxOutlineBlankIcon(element, ...properties);
    return element;
}
