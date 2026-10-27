import { initIcon } from "./icon.js";

//the url of the groups2 outlined svg; resolved relative to this module
const URL_GROUPS2OUTLINED = new URL('../../assets/icons/groups2Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a groups2 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/groups2Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGroups2OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'groups2OutlinedIcon', url: URL_GROUPS2OUTLINED }, ...properties);
}

/**
 * Creates a groups2 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const groups2OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGroups2OutlinedIcon(element, ...properties);
    return element;
}
