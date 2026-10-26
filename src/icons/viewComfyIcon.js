import { initIcon } from "./icon.js";

//the url of the view comfy svg; resolved relative to this module
const URL_VIEWCOMFY = new URL('../../assets/icons/viewComfy.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view comfy icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewComfy.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewComfyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWCOMFY }, ...properties);
}

/**
 * Creates a view comfy icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewComfyIcon = (...properties) => {
    const element = document.createElement('div');
    initViewComfyIcon(element, ...properties);
    return element;
}
