import { initIcon } from "./icon.js";

//the url of the maximize svg; resolved relative to this module
const URL_MAXIMIZE = new URL('../../assets/icons/maximize.svg', import.meta.url).href;

/**
 * Initializes an icon element as a maximize icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/maximize.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMaximizeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MAXIMIZE }, ...properties);
}

/**
 * Creates a maximize icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const maximizeIcon = (...properties) => {
    const element = document.createElement('div');
    initMaximizeIcon(element, ...properties);
    return element;
}
