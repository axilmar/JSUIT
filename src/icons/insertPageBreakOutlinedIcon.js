import { initIcon } from "./icon.js";

//the url of the insert page break outlined svg; resolved relative to this module
const URL_INSERTPAGEBREAKOUTLINED = new URL('../../assets/icons/insertPageBreakOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert page break outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertPageBreakOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertPageBreakOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INSERTPAGEBREAKOUTLINED }, ...properties);
}

/**
 * Creates an insert page break outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertPageBreakOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertPageBreakOutlinedIcon(element, ...properties);
    return element;
}
