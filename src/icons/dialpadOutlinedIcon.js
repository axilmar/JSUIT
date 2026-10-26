import { initIcon } from "./icon.js";

//the url of the dialpad outlined svg; resolved relative to this module
const URL_DIALPADOUTLINED = new URL('../../assets/icons/dialpadOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dialpad outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dialpadOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDialpadOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DIALPADOUTLINED }, ...properties);
}

/**
 * Creates a dialpad outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dialpadOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDialpadOutlinedIcon(element, ...properties);
    return element;
}
