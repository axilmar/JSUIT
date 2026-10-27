import { initIcon } from "./icon.js";

//the url of the published with changes svg; resolved relative to this module
const URL_PUBLISHEDWITHCHANGES = new URL('../../assets/icons/publishedWithChanges.svg', import.meta.url).href;

/**
 * Initializes an icon element as a published with changes icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/publishedWithChanges.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPublishedWithChangesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'publishedWithChangesIcon', url: URL_PUBLISHEDWITHCHANGES }, ...properties);
}

/**
 * Creates a published with changes icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const publishedWithChangesIcon = (...properties) => {
    const element = document.createElement('div');
    initPublishedWithChangesIcon(element, ...properties);
    return element;
}
