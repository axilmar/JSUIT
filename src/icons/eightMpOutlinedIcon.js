import { initIcon } from "./icon.js";

//the url of the eight mp outlined svg; resolved relative to this module
const URL_EIGHTMPOUTLINED = new URL('../../assets/icons/eightMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eight mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eightMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEightMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EIGHTMPOUTLINED }, ...properties);
}

/**
 * Creates an eight mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eightMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEightMpOutlinedIcon(element, ...properties);
    return element;
}
