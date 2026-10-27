import { initIcon } from "./icon.js";

//the url of the auto fix high outlined svg; resolved relative to this module
const URL_AUTOFIXHIGHOUTLINED = new URL('../../assets/icons/autoFixHighOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto fix high outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoFixHighOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoFixHighOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'autoFixHighOutlinedIcon', url: URL_AUTOFIXHIGHOUTLINED }, ...properties);
}

/**
 * Creates an auto fix high outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoFixHighOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoFixHighOutlinedIcon(element, ...properties);
    return element;
}
