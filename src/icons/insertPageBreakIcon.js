import { initIcon } from "./icon.js";

//the url of the insert page break svg; resolved relative to this module
const URL_INSERTPAGEBREAK = new URL('../../assets/icons/insertPageBreak.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert page break icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertPageBreak.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertPageBreakIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INSERTPAGEBREAK }, ...properties);
}

/**
 * Creates an insert page break icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertPageBreakIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertPageBreakIcon(element, ...properties);
    return element;
}
