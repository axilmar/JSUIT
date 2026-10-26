import { initIcon } from "./icon.js";

//the url of the edit road svg; resolved relative to this module
const URL_EDITROAD = new URL('../../assets/icons/editRoad.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit road icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editRoad.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditRoadIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EDITROAD }, ...properties);
}

/**
 * Creates an edit road icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editRoadIcon = (...properties) => {
    const element = document.createElement('div');
    initEditRoadIcon(element, ...properties);
    return element;
}
