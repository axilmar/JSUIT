import { initIcon } from "./icon.js";

//the url of the backspace outlined svg; resolved relative to this module
const URL_BACKSPACEOUTLINED = new URL('../../assets/icons/backspaceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a backspace outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/backspaceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBackspaceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'backspaceOutlinedIcon', url: URL_BACKSPACEOUTLINED }, ...properties);
}

/**
 * Creates a backspace outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const backspaceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBackspaceOutlinedIcon(element, ...properties);
    return element;
}
