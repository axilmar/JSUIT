import { initIcon } from "./icon.js";

//the url of the maximize outlined svg; resolved relative to this module
const URL_MAXIMIZEOUTLINED = new URL('../../assets/icons/maximizeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a maximize outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/maximizeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMaximizeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MAXIMIZEOUTLINED }, ...properties);
}

/**
 * Creates a maximize outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const maximizeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMaximizeOutlinedIcon(element, ...properties);
    return element;
}
