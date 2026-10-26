import { initIcon } from "./icon.js";

//the url of the share location outlined svg; resolved relative to this module
const URL_SHARELOCATIONOUTLINED = new URL('../../assets/icons/shareLocationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a share location outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shareLocationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShareLocationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SHARELOCATIONOUTLINED }, ...properties);
}

/**
 * Creates a share location outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shareLocationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initShareLocationOutlinedIcon(element, ...properties);
    return element;
}
