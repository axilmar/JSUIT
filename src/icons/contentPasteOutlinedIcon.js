import { initIcon } from "./icon.js";

//the url of the content paste outlined svg; resolved relative to this module
const URL_CONTENTPASTEOUTLINED = new URL('../../assets/icons/contentPasteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a content paste outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contentPasteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContentPasteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contentPasteOutlinedIcon', url: URL_CONTENTPASTEOUTLINED }, ...properties);
}

/**
 * Creates a content paste outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contentPasteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initContentPasteOutlinedIcon(element, ...properties);
    return element;
}
