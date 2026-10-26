import { initIcon } from "./icon.js";

//the url of the margin outlined svg; resolved relative to this module
const URL_MARGINOUTLINED = new URL('../../assets/icons/marginOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a margin outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/marginOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarginOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MARGINOUTLINED }, ...properties);
}

/**
 * Creates a margin outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const marginOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMarginOutlinedIcon(element, ...properties);
    return element;
}
