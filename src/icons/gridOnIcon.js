import { initIcon } from "./icon.js";

//the url of the grid on svg; resolved relative to this module
const URL_GRIDON = new URL('../../assets/icons/gridOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grid on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gridOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGridOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gridOnIcon', url: URL_GRIDON }, ...properties);
}

/**
 * Creates a grid on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gridOnIcon = (...properties) => {
    const element = document.createElement('div');
    initGridOnIcon(element, ...properties);
    return element;
}
