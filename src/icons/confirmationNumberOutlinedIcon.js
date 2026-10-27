import { initIcon } from "./icon.js";

//the url of the confirmation number outlined svg; resolved relative to this module
const URL_CONFIRMATIONNUMBEROUTLINED = new URL('../../assets/icons/confirmationNumberOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a confirmation number outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/confirmationNumberOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initConfirmationNumberOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'confirmationNumberOutlinedIcon', url: URL_CONFIRMATIONNUMBEROUTLINED }, ...properties);
}

/**
 * Creates a confirmation number outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const confirmationNumberOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initConfirmationNumberOutlinedIcon(element, ...properties);
    return element;
}
