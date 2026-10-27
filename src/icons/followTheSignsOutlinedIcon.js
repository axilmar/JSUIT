import { initIcon } from "./icon.js";

//the url of the follow the signs outlined svg; resolved relative to this module
const URL_FOLLOWTHESIGNSOUTLINED = new URL('../../assets/icons/followTheSignsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a follow the signs outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/followTheSignsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFollowTheSignsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'followTheSignsOutlinedIcon', url: URL_FOLLOWTHESIGNSOUTLINED }, ...properties);
}

/**
 * Creates a follow the signs outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const followTheSignsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFollowTheSignsOutlinedIcon(element, ...properties);
    return element;
}
