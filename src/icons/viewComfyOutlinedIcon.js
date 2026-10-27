import { initIcon } from "./icon.js";

//the url of the view comfy outlined svg; resolved relative to this module
const URL_VIEWCOMFYOUTLINED = new URL('../../assets/icons/viewComfyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view comfy outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewComfyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewComfyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewComfyOutlinedIcon', url: URL_VIEWCOMFYOUTLINED }, ...properties);
}

/**
 * Creates a view comfy outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewComfyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewComfyOutlinedIcon(element, ...properties);
    return element;
}
