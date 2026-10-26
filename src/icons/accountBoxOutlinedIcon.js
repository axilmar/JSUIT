import { initIcon } from "./icon.js";

//the url of the account box outlined svg; resolved relative to this module
const URL_ACCOUNTBOXOUTLINED = new URL('../../assets/icons/accountBoxOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an account box outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accountBoxOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccountBoxOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ACCOUNTBOXOUTLINED }, ...properties);
}

/**
 * Creates an account box outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accountBoxOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAccountBoxOutlinedIcon(element, ...properties);
    return element;
}
