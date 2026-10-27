import { initIcon } from "./icon.js";

//the url of the content paste off svg; resolved relative to this module
const URL_CONTENTPASTEOFF = new URL('../../assets/icons/contentPasteOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a content paste off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/contentPasteOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContentPasteOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'contentPasteOffIcon', url: URL_CONTENTPASTEOFF }, ...properties);
}

/**
 * Creates a content paste off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const contentPasteOffIcon = (...properties) => {
    const element = document.createElement('div');
    initContentPasteOffIcon(element, ...properties);
    return element;
}
