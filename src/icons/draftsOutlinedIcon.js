import { initIcon } from "./icon.js";

//the url of the drafts outlined svg; resolved relative to this module
const URL_DRAFTSOUTLINED = new URL('../../assets/icons/draftsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a drafts outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/draftsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDraftsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DRAFTSOUTLINED }, ...properties);
}

/**
 * Creates a drafts outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const draftsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDraftsOutlinedIcon(element, ...properties);
    return element;
}
