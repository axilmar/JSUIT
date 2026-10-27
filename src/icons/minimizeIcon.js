import { initIcon } from "./icon.js";

//the url of the minimize svg; resolved relative to this module
const URL_MINIMIZE = new URL('../../assets/icons/minimize.svg', import.meta.url).href;

/**
 * Initializes an icon element as a minimize icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/minimize.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMinimizeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'minimizeIcon', url: URL_MINIMIZE }, ...properties);
}

/**
 * Creates a minimize icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const minimizeIcon = (...properties) => {
    const element = document.createElement('div');
    initMinimizeIcon(element, ...properties);
    return element;
}
