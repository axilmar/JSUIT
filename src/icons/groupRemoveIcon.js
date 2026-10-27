import { initIcon } from "./icon.js";

//the url of the group remove svg; resolved relative to this module
const URL_GROUPREMOVE = new URL('../../assets/icons/groupRemove.svg', import.meta.url).href;

/**
 * Initializes an icon element as a group remove icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/groupRemove.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGroupRemoveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'groupRemoveIcon', url: URL_GROUPREMOVE }, ...properties);
}

/**
 * Creates a group remove icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const groupRemoveIcon = (...properties) => {
    const element = document.createElement('div');
    initGroupRemoveIcon(element, ...properties);
    return element;
}
