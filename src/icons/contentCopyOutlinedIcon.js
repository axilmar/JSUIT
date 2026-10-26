import { initIcon } from "./icon.js";

//the url of the content copy outlined svg; resolved relative to this module
const URL_CONTENTCOPYOUTLINED = new URL('../../assets/icons/contentCopyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a content copy outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contentCopyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContentCopyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONTENTCOPYOUTLINED }, ...properties);
}

/**
 * Creates a content copy outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contentCopyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initContentCopyOutlinedIcon(element, ...properties);
    return element;
}
