import { initIcon } from "./icon.js";

//the url of the public off outlined svg; resolved relative to this module
const URL_PUBLICOFFOUTLINED = new URL('../../assets/icons/publicOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a public off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/publicOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPublicOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PUBLICOFFOUTLINED }, ...properties);
}

/**
 * Creates a public off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const publicOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPublicOffOutlinedIcon(element, ...properties);
    return element;
}
