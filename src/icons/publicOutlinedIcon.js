import { initIcon } from "./icon.js";

//the url of the public outlined svg; resolved relative to this module
const URL_PUBLICOUTLINED = new URL('../../assets/icons/publicOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a public outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/publicOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPublicOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'publicOutlinedIcon', url: URL_PUBLICOUTLINED }, ...properties);
}

/**
 * Creates a public outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const publicOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPublicOutlinedIcon(element, ...properties);
    return element;
}
