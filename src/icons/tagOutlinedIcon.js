import { initIcon } from "./icon.js";

//the url of the tag outlined svg; resolved relative to this module
const URL_TAGOUTLINED = new URL('../../assets/icons/tagOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tag outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tagOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTagOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TAGOUTLINED }, ...properties);
}

/**
 * Creates a tag outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tagOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTagOutlinedIcon(element, ...properties);
    return element;
}
