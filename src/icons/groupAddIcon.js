import { initIcon } from "./icon.js";

//the url of the group add svg; resolved relative to this module
const URL_GROUPADD = new URL('../../assets/icons/groupAdd.svg', import.meta.url).href;

/**
 * Initializes an icon element as a group add icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/groupAdd.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGroupAddIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'groupAddIcon', url: URL_GROUPADD }, ...properties);
}

/**
 * Creates a group add icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const groupAddIcon = (...properties) => {
    const element = document.createElement('div');
    initGroupAddIcon(element, ...properties);
    return element;
}
