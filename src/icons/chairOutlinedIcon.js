import { initIcon } from "./icon.js";

//the url of the chair outlined svg; resolved relative to this module
const URL_CHAIROUTLINED = new URL('../../assets/icons/chairOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chair outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chairOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChairOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHAIROUTLINED }, ...properties);
}

/**
 * Creates a chair outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chairOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChairOutlinedIcon(element, ...properties);
    return element;
}
