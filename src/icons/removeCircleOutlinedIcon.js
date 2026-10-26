import { initIcon } from "./icon.js";

//the url of the remove circle outlined svg; resolved relative to this module
const URL_REMOVECIRCLEOUTLINED = new URL('../../assets/icons/removeCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REMOVECIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a remove circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveCircleOutlinedIcon(element, ...properties);
    return element;
}
