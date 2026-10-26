import { initIcon } from "./icon.js";

//the url of the view comfy alt outlined svg; resolved relative to this module
const URL_VIEWCOMFYALTOUTLINED = new URL('../../assets/icons/viewComfyAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view comfy alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewComfyAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewComfyAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWCOMFYALTOUTLINED }, ...properties);
}

/**
 * Creates a view comfy alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewComfyAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewComfyAltOutlinedIcon(element, ...properties);
    return element;
}
