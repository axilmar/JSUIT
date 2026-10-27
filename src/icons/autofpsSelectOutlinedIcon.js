import { initIcon } from "./icon.js";

//the url of the autofps select outlined svg; resolved relative to this module
const URL_AUTOFPSSELECTOUTLINED = new URL('../../assets/icons/autofpsSelectOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an autofps select outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autofpsSelectOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutofpsSelectOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'autofpsSelectOutlinedIcon', url: URL_AUTOFPSSELECTOUTLINED }, ...properties);
}

/**
 * Creates an autofps select outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autofpsSelectOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAutofpsSelectOutlinedIcon(element, ...properties);
    return element;
}
