import { initIcon } from "./icon.js";

//the url of the groups2 svg; resolved relative to this module
const URL_GROUPS2 = new URL('../../assets/icons/groups2.svg', import.meta.url).href;

/**
 * Initializes an icon element as a groups2 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/groups2.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGroups2Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GROUPS2 }, ...properties);
}

/**
 * Creates a groups2 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const groups2Icon = (...properties) => {
    const element = document.createElement('div');
    initGroups2Icon(element, ...properties);
    return element;
}
