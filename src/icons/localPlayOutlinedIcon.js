import { initIcon } from "./icon.js";

//the url of the local play outlined svg; resolved relative to this module
const URL_LOCALPLAYOUTLINED = new URL('../../assets/icons/localPlayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local play outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localPlayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalPlayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALPLAYOUTLINED }, ...properties);
}

/**
 * Creates a local play outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localPlayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalPlayOutlinedIcon(element, ...properties);
    return element;
}
