import { initIcon } from "./icon.js";

//the url of the more outlined svg; resolved relative to this module
const URL_MOREOUTLINED = new URL('../../assets/icons/moreOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a more outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moreOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoreOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'moreOutlinedIcon', url: URL_MOREOUTLINED }, ...properties);
}

/**
 * Creates a more outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moreOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMoreOutlinedIcon(element, ...properties);
    return element;
}
