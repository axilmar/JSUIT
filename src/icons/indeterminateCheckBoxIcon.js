import { initIcon } from "./icon.js";

//the url of the indeterminate check box svg; resolved relative to this module
const URL_INDETERMINATECHECKBOX = new URL('../../assets/icons/indeterminateCheckBox.svg', import.meta.url).href;

/**
 * Initializes an icon element as an indeterminate check box icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/indeterminateCheckBox.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIndeterminateCheckBoxIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'indeterminateCheckBoxIcon', url: URL_INDETERMINATECHECKBOX }, ...properties);
}

/**
 * Creates an indeterminate check box icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const indeterminateCheckBoxIcon = (...properties) => {
    const element = document.createElement('div');
    initIndeterminateCheckBoxIcon(element, ...properties);
    return element;
}
