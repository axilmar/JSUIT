import { initIcon } from "./icon.js";

//the url of the unarchive outlined svg; resolved relative to this module
const URL_UNARCHIVEOUTLINED = new URL('../../assets/icons/unarchiveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an unarchive outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/unarchiveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUnarchiveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'unarchiveOutlinedIcon', url: URL_UNARCHIVEOUTLINED }, ...properties);
}

/**
 * Creates an unarchive outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const unarchiveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUnarchiveOutlinedIcon(element, ...properties);
    return element;
}
