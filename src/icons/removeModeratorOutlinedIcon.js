import { initIcon } from "./icon.js";

//the url of the remove moderator outlined svg; resolved relative to this module
const URL_REMOVEMODERATOROUTLINED = new URL('../../assets/icons/removeModeratorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove moderator outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeModeratorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveModeratorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'removeModeratorOutlinedIcon', url: URL_REMOVEMODERATOROUTLINED }, ...properties);
}

/**
 * Creates a remove moderator outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeModeratorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveModeratorOutlinedIcon(element, ...properties);
    return element;
}
