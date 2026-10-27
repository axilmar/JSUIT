import { initIcon } from "./icon.js";

//the url of the sos outlined svg; resolved relative to this module
const URL_SOSOUTLINED = new URL('../../assets/icons/sosOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sos outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sosOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSosOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sosOutlinedIcon', url: URL_SOSOUTLINED }, ...properties);
}

/**
 * Creates a sos outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sosOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSosOutlinedIcon(element, ...properties);
    return element;
}
