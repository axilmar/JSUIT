import { initIcon } from "./icon.js";

//the url of the church svg; resolved relative to this module
const URL_CHURCH = new URL('../../assets/icons/church.svg', import.meta.url).href;

/**
 * Initializes an icon element as a church icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/church.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChurchIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHURCH }, ...properties);
}

/**
 * Creates a church icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const churchIcon = (...properties) => {
    const element = document.createElement('div');
    initChurchIcon(element, ...properties);
    return element;
}
