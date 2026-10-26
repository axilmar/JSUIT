import { initIcon } from "./icon.js";

//the url of the view cozy svg; resolved relative to this module
const URL_VIEWCOZY = new URL('../../assets/icons/viewCozy.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view cozy icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewCozy.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewCozyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWCOZY }, ...properties);
}

/**
 * Creates a view cozy icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewCozyIcon = (...properties) => {
    const element = document.createElement('div');
    initViewCozyIcon(element, ...properties);
    return element;
}
