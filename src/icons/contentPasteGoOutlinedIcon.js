import { initIcon } from "./icon.js";

//the url of the content paste go outlined svg; resolved relative to this module
const URL_CONTENTPASTEGOOUTLINED = new URL('../../assets/icons/contentPasteGoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a content paste go outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contentPasteGoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContentPasteGoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONTENTPASTEGOOUTLINED }, ...properties);
}

/**
 * Creates a content paste go outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contentPasteGoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initContentPasteGoOutlinedIcon(element, ...properties);
    return element;
}
