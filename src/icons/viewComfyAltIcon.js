import { initIcon } from "./icon.js";

//the url of the view comfy alt svg; resolved relative to this module
const URL_VIEWCOMFYALT = new URL('../../assets/icons/viewComfyAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view comfy alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewComfyAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewComfyAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWCOMFYALT }, ...properties);
}

/**
 * Creates a view comfy alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewComfyAltIcon = (...properties) => {
    const element = document.createElement('div');
    initViewComfyAltIcon(element, ...properties);
    return element;
}
