import { initIcon } from "./icon.js";

//the url of the add moderator svg; resolved relative to this module
const URL_ADDMODERATOR = new URL('../../assets/icons/addModerator.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add moderator icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addModerator.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddModeratorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addModeratorIcon', url: URL_ADDMODERATOR }, ...properties);
}

/**
 * Creates an add moderator icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addModeratorIcon = (...properties) => {
    const element = document.createElement('div');
    initAddModeratorIcon(element, ...properties);
    return element;
}
