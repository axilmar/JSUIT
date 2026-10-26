import { initIcon } from "./icon.js";

//the url of the remove circle outline outlined svg; resolved relative to this module
const URL_REMOVECIRCLEOUTLINEOUTLINED = new URL('../../assets/icons/removeCircleOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove circle outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeCircleOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveCircleOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REMOVECIRCLEOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a remove circle outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeCircleOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveCircleOutlineOutlinedIcon(element, ...properties);
    return element;
}
