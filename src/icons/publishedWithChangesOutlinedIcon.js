import { initIcon } from "./icon.js";

//the url of the published with changes outlined svg; resolved relative to this module
const URL_PUBLISHEDWITHCHANGESOUTLINED = new URL('../../assets/icons/publishedWithChangesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a published with changes outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/publishedWithChangesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPublishedWithChangesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PUBLISHEDWITHCHANGESOUTLINED }, ...properties);
}

/**
 * Creates a published with changes outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const publishedWithChangesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPublishedWithChangesOutlinedIcon(element, ...properties);
    return element;
}
