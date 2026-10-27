import { initIcon } from "./icon.js";

//the url of the share outlined svg; resolved relative to this module
const URL_SHAREOUTLINED = new URL('../../assets/icons/shareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a share outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shareOutlinedIcon', url: URL_SHAREOUTLINED }, ...properties);
}

/**
 * Creates a share outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShareOutlinedIcon(element, ...properties);
    return element;
}
