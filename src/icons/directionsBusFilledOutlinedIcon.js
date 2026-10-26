import { initIcon } from "./icon.js";

//the url of the directions bus filled outlined svg; resolved relative to this module
const URL_DIRECTIONSBUSFILLEDOUTLINED = new URL('../../assets/icons/directionsBusFilledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a directions bus filled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/directionsBusFilledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDirectionsBusFilledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIRECTIONSBUSFILLEDOUTLINED }, ...properties);
}

/**
 * Creates a directions bus filled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const directionsBusFilledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDirectionsBusFilledOutlinedIcon(element, ...properties);
    return element;
}
