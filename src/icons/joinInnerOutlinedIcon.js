import { initIcon } from "./icon.js";

//the url of the join inner outlined svg; resolved relative to this module
const URL_JOININNEROUTLINED = new URL('../../assets/icons/joinInnerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a join inner outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/joinInnerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initJoinInnerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_JOININNEROUTLINED }, ...properties);
}

/**
 * Creates a join inner outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const joinInnerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initJoinInnerOutlinedIcon(element, ...properties);
    return element;
}
