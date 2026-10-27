import { initIcon } from "./icon.js";

//the url of the arrow circle left outlined svg; resolved relative to this module
const URL_ARROWCIRCLELEFTOUTLINED = new URL('../../assets/icons/arrowCircleLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow circle left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowCircleLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowCircleLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'arrowCircleLeftOutlinedIcon', url: URL_ARROWCIRCLELEFTOUTLINED }, ...properties);
}

/**
 * Creates an arrow circle left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowCircleLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowCircleLeftOutlinedIcon(element, ...properties);
    return element;
}
