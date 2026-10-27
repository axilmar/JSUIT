import { initIcon } from "./icon.js";

//the url of the spa outlined svg; resolved relative to this module
const URL_SPAOUTLINED = new URL('../../assets/icons/spaOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a spa outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/spaOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpaOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'spaOutlinedIcon', url: URL_SPAOUTLINED }, ...properties);
}

/**
 * Creates a spa outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const spaOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpaOutlinedIcon(element, ...properties);
    return element;
}
