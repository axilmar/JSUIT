import { initIcon } from "./icon.js";

//the url of the fort outlined svg; resolved relative to this module
const URL_FORTOUTLINED = new URL('../../assets/icons/fortOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fort outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fortOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFortOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORTOUTLINED }, ...properties);
}

/**
 * Creates a fort outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fortOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFortOutlinedIcon(element, ...properties);
    return element;
}
