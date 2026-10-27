import { initIcon } from "./icon.js";

//the url of the preview outlined svg; resolved relative to this module
const URL_PREVIEWOUTLINED = new URL('../../assets/icons/previewOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a preview outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/previewOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPreviewOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'previewOutlinedIcon', url: URL_PREVIEWOUTLINED }, ...properties);
}

/**
 * Creates a preview outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const previewOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPreviewOutlinedIcon(element, ...properties);
    return element;
}
