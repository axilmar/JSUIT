import { initIcon } from "./icon.js";

//the url of the collections bookmark outlined svg; resolved relative to this module
const URL_COLLECTIONSBOOKMARKOUTLINED = new URL('../../assets/icons/collectionsBookmarkOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a collections bookmark outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/collectionsBookmarkOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCollectionsBookmarkOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'collectionsBookmarkOutlinedIcon', url: URL_COLLECTIONSBOOKMARKOUTLINED }, ...properties);
}

/**
 * Creates a collections bookmark outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const collectionsBookmarkOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCollectionsBookmarkOutlinedIcon(element, ...properties);
    return element;
}
