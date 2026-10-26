import { initIcon } from "./icon.js";

//the url of the border clear outlined svg; resolved relative to this module
const URL_BORDERCLEAROUTLINED = new URL('../../assets/icons/borderClearOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border clear outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderClearOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderClearOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BORDERCLEAROUTLINED }, ...properties);
}

/**
 * Creates a border clear outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderClearOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderClearOutlinedIcon(element, ...properties);
    return element;
}
