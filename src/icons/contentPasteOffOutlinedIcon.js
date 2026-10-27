import { initIcon } from "./icon.js";

//the url of the content paste off outlined svg; resolved relative to this module
const URL_CONTENTPASTEOFFOUTLINED = new URL('../../assets/icons/contentPasteOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a content paste off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contentPasteOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContentPasteOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contentPasteOffOutlinedIcon', url: URL_CONTENTPASTEOFFOUTLINED }, ...properties);
}

/**
 * Creates a content paste off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contentPasteOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initContentPasteOffOutlinedIcon(element, ...properties);
    return element;
}
