import { initIcon } from "./icon.js";

//the url of the terminal svg; resolved relative to this module
const URL_TERMINAL = new URL('../../assets/icons/terminal.svg', import.meta.url).href;

/**
 * Initializes an icon element as a terminal icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/terminal.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTerminalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TERMINAL }, ...properties);
}

/**
 * Creates a terminal icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const terminalIcon = (...properties) => {
    const element = document.createElement('div');
    initTerminalIcon(element, ...properties);
    return element;
}
