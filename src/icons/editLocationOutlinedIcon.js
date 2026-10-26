import { initIcon } from "./icon.js";

//the url of the edit location outlined svg; resolved relative to this module
const URL_EDITLOCATIONOUTLINED = new URL('../../assets/icons/editLocationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit location outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editLocationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditLocationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EDITLOCATIONOUTLINED }, ...properties);
}

/**
 * Creates an edit location outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editLocationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEditLocationOutlinedIcon(element, ...properties);
    return element;
}
