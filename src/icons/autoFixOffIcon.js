import { initIcon } from "./icon.js";

//the url of the auto fix off svg; resolved relative to this module
const URL_AUTOFIXOFF = new URL('../../assets/icons/autoFixOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto fix off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoFixOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoFixOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'autoFixOffIcon', url: URL_AUTOFIXOFF }, ...properties);
}

/**
 * Creates an auto fix off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoFixOffIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoFixOffIcon(element, ...properties);
    return element;
}
