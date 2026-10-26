import { initIcon } from "./icon.js";

//the url of the groups3 svg; resolved relative to this module
const URL_GROUPS3 = new URL('../../assets/icons/groups3.svg', import.meta.url).href;

/**
 * Initializes an icon element as a groups3 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/groups3.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGroups3Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GROUPS3 }, ...properties);
}

/**
 * Creates a groups3 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const groups3Icon = (...properties) => {
    const element = document.createElement('div');
    initGroups3Icon(element, ...properties);
    return element;
}
