import { initIcon } from "./icon.js";

//the url of the directions bus outlined svg; resolved relative to this module
const URL_DIRECTIONSBUSOUTLINED = new URL('../../assets/icons/directionsBusOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions bus outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsBusOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsBusOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSBUSOUTLINED }, ...properties);
}

/**
 * Creates a directions bus outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsBusOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsBusOutlinedIcon(element, ...properties);
    return element;
}
