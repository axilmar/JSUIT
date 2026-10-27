import { initIcon } from "./icon.js";

//the url of the content paste search outlined svg; resolved relative to this module
const URL_CONTENTPASTESEARCHOUTLINED = new URL('../../assets/icons/contentPasteSearchOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a content paste search outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contentPasteSearchOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContentPasteSearchOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contentPasteSearchOutlinedIcon', url: URL_CONTENTPASTESEARCHOUTLINED }, ...properties);
}

/**
 * Creates a content paste search outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contentPasteSearchOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initContentPasteSearchOutlinedIcon(element, ...properties);
    return element;
}
