import { initIcon } from "./icon.js";

//the url of the woman outlined svg; resolved relative to this module
const URL_WOMANOUTLINED = new URL('../../assets/icons/womanOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a woman outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/womanOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWomanOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'womanOutlinedIcon', url: URL_WOMANOUTLINED }, ...properties);
}

/**
 * Creates a woman outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const womanOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWomanOutlinedIcon(element, ...properties);
    return element;
}
