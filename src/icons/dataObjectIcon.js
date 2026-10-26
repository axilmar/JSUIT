import { initIcon } from "./icon.js";

//the url of the data object svg; resolved relative to this module
const URL_DATAOBJECT = new URL('../../assets/icons/dataObject.svg', import.meta.url).href;

/**
 * Initializes an icon element as a data object icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dataObject.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDataObjectIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DATAOBJECT }, ...properties);
}

/**
 * Creates a data object icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dataObjectIcon = (...properties) => {
    const element = document.createElement('div');
    initDataObjectIcon(element, ...properties);
    return element;
}
