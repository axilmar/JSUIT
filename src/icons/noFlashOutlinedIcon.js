import { initIcon } from "./icon.js";

//the url of the no flash outlined svg; resolved relative to this module
const URL_NOFLASHOUTLINED = new URL('../../assets/icons/noFlashOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no flash outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noFlashOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoFlashOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noFlashOutlinedIcon', url: URL_NOFLASHOUTLINED }, ...properties);
}

/**
 * Creates a no flash outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noFlashOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoFlashOutlinedIcon(element, ...properties);
    return element;
}
