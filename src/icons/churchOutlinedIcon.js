import { initIcon } from "./icon.js";

//the url of the church outlined svg; resolved relative to this module
const URL_CHURCHOUTLINED = new URL('../../assets/icons/churchOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a church outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/churchOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChurchOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHURCHOUTLINED }, ...properties);
}

/**
 * Creates a church outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const churchOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChurchOutlinedIcon(element, ...properties);
    return element;
}
