import { initIcon } from "./icon.js";

//the url of the add box outlined svg; resolved relative to this module
const URL_ADDBOXOUTLINED = new URL('../../assets/icons/addBoxOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add box outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addBoxOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddBoxOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDBOXOUTLINED }, ...properties);
}

/**
 * Creates an add box outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addBoxOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddBoxOutlinedIcon(element, ...properties);
    return element;
}
