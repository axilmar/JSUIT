import { initIcon } from "./icon.js";

//the url of the unpublished outlined svg; resolved relative to this module
const URL_UNPUBLISHEDOUTLINED = new URL('../../assets/icons/unpublishedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an unpublished outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/unpublishedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUnpublishedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'unpublishedOutlinedIcon', url: URL_UNPUBLISHEDOUTLINED }, ...properties);
}

/**
 * Creates an unpublished outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const unpublishedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUnpublishedOutlinedIcon(element, ...properties);
    return element;
}
