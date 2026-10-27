import { initIcon } from "./icon.js";

//the url of the add ic call svg; resolved relative to this module
const URL_ADDICCALL = new URL('../../assets/icons/addIcCall.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add ic call icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addIcCall.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddIcCallIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addIcCallIcon', url: URL_ADDICCALL }, ...properties);
}

/**
 * Creates an add ic call icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addIcCallIcon = (...properties) => {
    const element = document.createElement('div');
    initAddIcCallIcon(element, ...properties);
    return element;
}
