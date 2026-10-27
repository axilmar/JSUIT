import { initIcon } from "./icon.js";

//the url of the group remove outlined svg; resolved relative to this module
const URL_GROUPREMOVEOUTLINED = new URL('../../assets/icons/groupRemoveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a group remove outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/groupRemoveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGroupRemoveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'groupRemoveOutlinedIcon', url: URL_GROUPREMOVEOUTLINED }, ...properties);
}

/**
 * Creates a group remove outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const groupRemoveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGroupRemoveOutlinedIcon(element, ...properties);
    return element;
}
