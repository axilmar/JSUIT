import { initIcon } from "./icon.js";

//the url of the person add disabled outlined svg; resolved relative to this module
const URL_PERSONADDDISABLEDOUTLINED = new URL('../../assets/icons/personAddDisabledOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person add disabled outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personAddDisabledOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonAddDisabledOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERSONADDDISABLEDOUTLINED }, ...properties);
}

/**
 * Creates a person add disabled outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personAddDisabledOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPersonAddDisabledOutlinedIcon(element, ...properties);
    return element;
}
