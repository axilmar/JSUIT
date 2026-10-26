import { initIcon } from "./icon.js";

//the url of the grid on outlined svg; resolved relative to this module
const URL_GRIDONOUTLINED = new URL('../../assets/icons/gridOnOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grid on outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gridOnOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGridOnOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GRIDONOUTLINED }, ...properties);
}

/**
 * Creates a grid on outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gridOnOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGridOnOutlinedIcon(element, ...properties);
    return element;
}
