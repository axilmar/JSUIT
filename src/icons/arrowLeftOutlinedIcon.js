import { initIcon } from "./icon.js";

//the url of the arrow left outlined svg; resolved relative to this module
const URL_ARROWLEFTOUTLINED = new URL('../../assets/icons/arrowLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an arrow left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/arrowLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArrowLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARROWLEFTOUTLINED }, ...properties);
}

/**
 * Creates an arrow left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const arrowLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initArrowLeftOutlinedIcon(element, ...properties);
    return element;
}
