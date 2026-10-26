import { initIcon } from "./icon.js";

//the url of the terminal outlined svg; resolved relative to this module
const URL_TERMINALOUTLINED = new URL('../../assets/icons/terminalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a terminal outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/terminalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTerminalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TERMINALOUTLINED }, ...properties);
}

/**
 * Creates a terminal outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const terminalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTerminalOutlinedIcon(element, ...properties);
    return element;
}
