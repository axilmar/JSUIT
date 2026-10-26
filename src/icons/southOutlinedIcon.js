import { initIcon } from "./icon.js";

//the url of the south outlined svg; resolved relative to this module
const URL_SOUTHOUTLINED = new URL('../../assets/icons/southOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a south outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/southOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSouthOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SOUTHOUTLINED }, ...properties);
}

/**
 * Creates a south outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const southOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSouthOutlinedIcon(element, ...properties);
    return element;
}
