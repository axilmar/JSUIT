import { initIcon } from "./icon.js";

//the url of the wrap text outlined svg; resolved relative to this module
const URL_WRAPTEXTOUTLINED = new URL('../../assets/icons/wrapTextOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wrap text outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wrapTextOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWrapTextOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wrapTextOutlinedIcon', url: URL_WRAPTEXTOUTLINED }, ...properties);
}

/**
 * Creates a wrap text outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wrapTextOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWrapTextOutlinedIcon(element, ...properties);
    return element;
}
