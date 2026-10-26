import { initIcon } from "./icon.js";

//the url of the group work svg; resolved relative to this module
const URL_GROUPWORK = new URL('../../assets/icons/groupWork.svg', import.meta.url).href;

/**
 * Initializes an icon element as a group work icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/groupWork.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGroupWorkIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GROUPWORK }, ...properties);
}

/**
 * Creates a group work icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const groupWorkIcon = (...properties) => {
    const element = document.createElement('div');
    initGroupWorkIcon(element, ...properties);
    return element;
}
