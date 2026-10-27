import { initIcon } from "./icon.js";

//the url of the check box svg; resolved relative to this module
const URL_CHECKBOX = new URL('../../assets/icons/checkBox.svg', import.meta.url).href;

/**
 * Initializes an icon element as a check box icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/checkBox.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCheckBoxIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'checkBoxIcon', url: URL_CHECKBOX }, ...properties);
}

/**
 * Creates a check box icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const checkBoxIcon = (...properties) => {
    const element = document.createElement('div');
    initCheckBoxIcon(element, ...properties);
    return element;
}
