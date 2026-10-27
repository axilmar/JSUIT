import { initIcon } from "./icon.js";

//the url of the collections bookmark svg; resolved relative to this module
const URL_COLLECTIONSBOOKMARK = new URL('../../assets/icons/collectionsBookmark.svg', import.meta.url).href;

/**
 * Initializes an icon element as a collections bookmark icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/collectionsBookmark.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCollectionsBookmarkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'collectionsBookmarkIcon', url: URL_COLLECTIONSBOOKMARK }, ...properties);
}

/**
 * Creates a collections bookmark icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const collectionsBookmarkIcon = (...properties) => {
    const element = document.createElement('div');
    initCollectionsBookmarkIcon(element, ...properties);
    return element;
}
