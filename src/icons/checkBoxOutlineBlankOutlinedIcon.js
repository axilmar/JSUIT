import { initIcon } from "./icon.js";

//the url of the check box outline blank outlined svg; resolved relative to this module
const URL_CHECKBOXOUTLINEBLANKOUTLINED = new URL('../../assets/icons/checkBoxOutlineBlankOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a check box outline blank outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checkBoxOutlineBlankOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCheckBoxOutlineBlankOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'checkBoxOutlineBlankOutlinedIcon', url: URL_CHECKBOXOUTLINEBLANKOUTLINED }, ...properties);
}

/**
 * Creates a check box outline blank outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checkBoxOutlineBlankOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCheckBoxOutlineBlankOutlinedIcon(element, ...properties);
    return element;
}
