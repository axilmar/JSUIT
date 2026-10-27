import { initIcon } from "./icon.js";

//the url of the group svg; resolved relative to this module
const URL_GROUP = new URL('../../assets/icons/group.svg', import.meta.url).href;

/**
 * Initializes an icon element as a group icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/group.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGroupIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'groupIcon', url: URL_GROUP }, ...properties);
}

/**
 * Creates a group icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const groupIcon = (...properties) => {
    const element = document.createElement('div');
    initGroupIcon(element, ...properties);
    return element;
}
