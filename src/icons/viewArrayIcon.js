import { initIcon } from "./icon.js";

//the url of the view array svg; resolved relative to this module
const URL_VIEWARRAY = new URL('../../assets/icons/viewArray.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view array icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewArray.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewArrayIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWARRAY }, ...properties);
}

/**
 * Creates a view array icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewArrayIcon = (...properties) => {
    const element = document.createElement('div');
    initViewArrayIcon(element, ...properties);
    return element;
}
