import { initIcon } from "./icon.js";

//the url of the draw outlined svg; resolved relative to this module
const URL_DRAWOUTLINED = new URL('../../assets/icons/drawOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a draw outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/drawOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDrawOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'drawOutlinedIcon', url: URL_DRAWOUTLINED }, ...properties);
}

/**
 * Creates a draw outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const drawOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDrawOutlinedIcon(element, ...properties);
    return element;
}
