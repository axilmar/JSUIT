import { initIcon } from "./icon.js";

//the url of the attach file outlined svg; resolved relative to this module
const URL_ATTACHFILEOUTLINED = new URL('../../assets/icons/attachFileOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an attach file outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/attachFileOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAttachFileOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ATTACHFILEOUTLINED }, ...properties);
}

/**
 * Creates an attach file outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const attachFileOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAttachFileOutlinedIcon(element, ...properties);
    return element;
}
