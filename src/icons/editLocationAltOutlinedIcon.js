import { initIcon } from "./icon.js";

//the url of the edit location alt outlined svg; resolved relative to this module
const URL_EDITLOCATIONALTOUTLINED = new URL('../../assets/icons/editLocationAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit location alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editLocationAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditLocationAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'editLocationAltOutlinedIcon', url: URL_EDITLOCATIONALTOUTLINED }, ...properties);
}

/**
 * Creates an edit location alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editLocationAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEditLocationAltOutlinedIcon(element, ...properties);
    return element;
}
