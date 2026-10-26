import { initIcon } from "./icon.js";

//the url of the done all outlined svg; resolved relative to this module
const URL_DONEALLOUTLINED = new URL('../../assets/icons/doneAllOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a done all outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doneAllOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoneAllOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DONEALLOUTLINED }, ...properties);
}

/**
 * Creates a done all outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doneAllOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDoneAllOutlinedIcon(element, ...properties);
    return element;
}
