import { initIcon } from "./icon.js";

//the url of the person add alt outlined svg; resolved relative to this module
const URL_PERSONADDALTOUTLINED = new URL('../../assets/icons/personAddAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person add alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personAddAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonAddAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERSONADDALTOUTLINED }, ...properties);
}

/**
 * Creates a person add alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personAddAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonAddAltOutlinedIcon(element, ...properties);
    return element;
}
