import { initIcon } from "./icon.js";

//the url of the link svg; resolved relative to this module
const URL_LINK = new URL('../../assets/icons/link.svg', import.meta.url).href;

/**
 * Initializes an icon element as a link icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/link.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLinkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'linkIcon', url: URL_LINK }, ...properties);
}

/**
 * Creates a link icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const linkIcon = (...properties) => {
    const element = document.createElement('div');
    initLinkIcon(element, ...properties);
    return element;
}
