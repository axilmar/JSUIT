import { initIcon } from "./icon.js";

//the url of the edit outlined svg; resolved relative to this module
const URL_EDITOUTLINED = new URL('../../assets/icons/editOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'editOutlinedIcon', url: URL_EDITOUTLINED }, ...properties);
}

/**
 * Creates an edit outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEditOutlinedIcon(element, ...properties);
    return element;
}
