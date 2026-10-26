import { initIcon } from "./icon.js";

//the url of the toggle on svg; resolved relative to this module
const URL_TOGGLEON = new URL('../../assets/icons/toggleOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a toggle on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/toggleOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initToggleOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TOGGLEON }, ...properties);
}

/**
 * Creates a toggle on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const toggleOnIcon = (...properties) => {
    const element = document.createElement('div');
    initToggleOnIcon(element, ...properties);
    return element;
}
