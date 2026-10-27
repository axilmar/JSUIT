import { initIcon } from "./icon.js";

//the url of the account circle svg; resolved relative to this module
const URL_ACCOUNTCIRCLE = new URL('../../assets/icons/accountCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as an account circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/accountCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAccountCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'accountCircleIcon', url: URL_ACCOUNTCIRCLE }, ...properties);
}

/**
 * Creates an account circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const accountCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initAccountCircleIcon(element, ...properties);
    return element;
}
