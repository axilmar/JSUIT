import { initIcon } from "./icon.js";

//the url of the sick outlined svg; resolved relative to this module
const URL_SICKOUTLINED = new URL('../../assets/icons/sickOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sick outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sickOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSickOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sickOutlinedIcon', url: URL_SICKOUTLINED }, ...properties);
}

/**
 * Creates a sick outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sickOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSickOutlinedIcon(element, ...properties);
    return element;
}
