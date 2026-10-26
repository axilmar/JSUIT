import { initIcon } from "./icon.js";

//the url of the all out outlined svg; resolved relative to this module
const URL_ALLOUTOUTLINED = new URL('../../assets/icons/allOutOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an all out outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/allOutOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAllOutOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALLOUTOUTLINED }, ...properties);
}

/**
 * Creates an all out outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const allOutOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAllOutOutlinedIcon(element, ...properties);
    return element;
}
