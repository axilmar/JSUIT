import { initIcon } from "./icon.js";

//the url of the mouse outlined svg; resolved relative to this module
const URL_MOUSEOUTLINED = new URL('../../assets/icons/mouseOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mouse outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mouseOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMouseOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mouseOutlinedIcon', url: URL_MOUSEOUTLINED }, ...properties);
}

/**
 * Creates a mouse outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mouseOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMouseOutlinedIcon(element, ...properties);
    return element;
}
