import { initIcon } from "./icon.js";

//the url of the collections outlined svg; resolved relative to this module
const URL_COLLECTIONSOUTLINED = new URL('../../assets/icons/collectionsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a collections outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/collectionsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCollectionsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'collectionsOutlinedIcon', url: URL_COLLECTIONSOUTLINED }, ...properties);
}

/**
 * Creates a collections outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const collectionsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCollectionsOutlinedIcon(element, ...properties);
    return element;
}
