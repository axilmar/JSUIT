import { initIcon } from "./icon.js";

//the url of the add to home screen outlined svg; resolved relative to this module
const URL_ADDTOHOMESCREENOUTLINED = new URL('../../assets/icons/addToHomeScreenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add to home screen outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addToHomeScreenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddToHomeScreenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addToHomeScreenOutlinedIcon', url: URL_ADDTOHOMESCREENOUTLINED }, ...properties);
}

/**
 * Creates an add to home screen outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addToHomeScreenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddToHomeScreenOutlinedIcon(element, ...properties);
    return element;
}
