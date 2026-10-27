import { initIcon } from "./icon.js";

//the url of the supervised user circle svg; resolved relative to this module
const URL_SUPERVISEDUSERCIRCLE = new URL('../../assets/icons/supervisedUserCircle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a supervised user circle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/supervisedUserCircle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSupervisedUserCircleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'supervisedUserCircleIcon', url: URL_SUPERVISEDUSERCIRCLE }, ...properties);
}

/**
 * Creates a supervised user circle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const supervisedUserCircleIcon = (...properties) => {
    const element = document.createElement('div');
    initSupervisedUserCircleIcon(element, ...properties);
    return element;
}
