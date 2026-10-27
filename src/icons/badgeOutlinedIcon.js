import { initIcon } from "./icon.js";

//the url of the badge outlined svg; resolved relative to this module
const URL_BADGEOUTLINED = new URL('../../assets/icons/badgeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a badge outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/badgeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBadgeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'badgeOutlinedIcon', url: URL_BADGEOUTLINED }, ...properties);
}

/**
 * Creates a badge outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const badgeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBadgeOutlinedIcon(element, ...properties);
    return element;
}
