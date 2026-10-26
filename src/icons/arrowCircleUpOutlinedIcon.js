import { initIcon } from "./icon.js";

//the url of the arrow circle up outlined svg; resolved relative to this module
const URL_ARROWCIRCLEUPOUTLINED = new URL('../../assets/icons/arrowCircleUpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow circle up outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowCircleUpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowCircleUpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWCIRCLEUPOUTLINED }, ...properties);
}

/**
 * Creates an arrow circle up outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowCircleUpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowCircleUpOutlinedIcon(element, ...properties);
    return element;
}
