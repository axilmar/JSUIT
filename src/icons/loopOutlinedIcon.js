import { initIcon } from "./icon.js";

//the url of the loop outlined svg; resolved relative to this module
const URL_LOOPOUTLINED = new URL('../../assets/icons/loopOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a loop outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/loopOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLoopOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'loopOutlinedIcon', url: URL_LOOPOUTLINED }, ...properties);
}

/**
 * Creates a loop outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const loopOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLoopOutlinedIcon(element, ...properties);
    return element;
}
