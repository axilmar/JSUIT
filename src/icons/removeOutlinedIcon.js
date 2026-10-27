import { initIcon } from "./icon.js";

//the url of the remove outlined svg; resolved relative to this module
const URL_REMOVEOUTLINED = new URL('../../assets/icons/removeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'removeOutlinedIcon', url: URL_REMOVEOUTLINED }, ...properties);
}

/**
 * Creates a remove outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveOutlinedIcon(element, ...properties);
    return element;
}
