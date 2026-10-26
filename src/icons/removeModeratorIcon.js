import { initIcon } from "./icon.js";

//the url of the remove moderator svg; resolved relative to this module
const URL_REMOVEMODERATOR = new URL('../../assets/icons/removeModerator.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remove moderator icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/removeModerator.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRemoveModeratorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_REMOVEMODERATOR }, ...properties);
}

/**
 * Creates a remove moderator icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const removeModeratorIcon = (...properties) => {
    const element = document.createElement('div');
    initRemoveModeratorIcon(element, ...properties);
    return element;
}
