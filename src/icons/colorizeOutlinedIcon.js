import { initIcon } from "./icon.js";

//the url of the colorize outlined svg; resolved relative to this module
const URL_COLORIZEOUTLINED = new URL('../../assets/icons/colorizeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a colorize outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/colorizeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initColorizeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'colorizeOutlinedIcon', url: URL_COLORIZEOUTLINED }, ...properties);
}

/**
 * Creates a colorize outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const colorizeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initColorizeOutlinedIcon(element, ...properties);
    return element;
}
