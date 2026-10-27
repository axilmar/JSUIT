import { initIcon } from "./icon.js";

//the url of the badge svg; resolved relative to this module
const URL_BADGE = new URL('../../assets/icons/badge.svg', import.meta.url).href;

/**
 * Initializes an icon element as a badge icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/badge.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBadgeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'badgeIcon', url: URL_BADGE }, ...properties);
}

/**
 * Creates a badge icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const badgeIcon = (...properties) => {
    const element = document.createElement('div');
    initBadgeIcon(element, ...properties);
    return element;
}
