import { initIcon } from "./icon.js";

//the url of the dynamic feed outlined svg; resolved relative to this module
const URL_DYNAMICFEEDOUTLINED = new URL('../../assets/icons/dynamicFeedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dynamic feed outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dynamicFeedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDynamicFeedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dynamicFeedOutlinedIcon', url: URL_DYNAMICFEEDOUTLINED }, ...properties);
}

/**
 * Creates a dynamic feed outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dynamicFeedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDynamicFeedOutlinedIcon(element, ...properties);
    return element;
}
