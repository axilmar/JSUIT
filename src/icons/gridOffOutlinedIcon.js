import { initIcon } from "./icon.js";

//the url of the grid off outlined svg; resolved relative to this module
const URL_GRIDOFFOUTLINED = new URL('../../assets/icons/gridOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grid off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gridOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGridOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gridOffOutlinedIcon', url: URL_GRIDOFFOUTLINED }, ...properties);
}

/**
 * Creates a grid off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gridOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGridOffOutlinedIcon(element, ...properties);
    return element;
}
