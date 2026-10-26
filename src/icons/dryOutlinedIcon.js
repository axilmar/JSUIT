import { initIcon } from "./icon.js";

//the url of the dry outlined svg; resolved relative to this module
const URL_DRYOUTLINED = new URL('../../assets/icons/dryOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dry outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dryOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDryOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DRYOUTLINED }, ...properties);
}

/**
 * Creates a dry outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dryOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDryOutlinedIcon(element, ...properties);
    return element;
}
