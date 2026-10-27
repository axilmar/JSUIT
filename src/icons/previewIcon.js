import { initIcon } from "./icon.js";

//the url of the preview svg; resolved relative to this module
const URL_PREVIEW = new URL('../../assets/icons/preview.svg', import.meta.url).href;

/**
 * Initializes an icon element as a preview icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/preview.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPreviewIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'previewIcon', url: URL_PREVIEW }, ...properties);
}

/**
 * Creates a preview icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const previewIcon = (...properties) => {
    const element = document.createElement('div');
    initPreviewIcon(element, ...properties);
    return element;
}
