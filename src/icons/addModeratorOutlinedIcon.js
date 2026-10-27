import { initIcon } from "./icon.js";

//the url of the add moderator outlined svg; resolved relative to this module
const URL_ADDMODERATOROUTLINED = new URL('../../assets/icons/addModeratorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add moderator outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addModeratorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddModeratorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addModeratorOutlinedIcon', url: URL_ADDMODERATOROUTLINED }, ...properties);
}

/**
 * Creates an add moderator outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addModeratorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddModeratorOutlinedIcon(element, ...properties);
    return element;
}
