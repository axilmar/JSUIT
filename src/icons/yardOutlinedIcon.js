import { initIcon } from "./icon.js";

//the url of the yard outlined svg; resolved relative to this module
const URL_YARDOUTLINED = new URL('../../assets/icons/yardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a yard outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/yardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initYardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'yardOutlinedIcon', url: URL_YARDOUTLINED }, ...properties);
}

/**
 * Creates a yard outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const yardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initYardOutlinedIcon(element, ...properties);
    return element;
}
