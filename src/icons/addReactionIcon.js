import { initIcon } from "./icon.js";

//the url of the add reaction svg; resolved relative to this module
const URL_ADDREACTION = new URL('../../assets/icons/addReaction.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add reaction icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addReaction.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddReactionIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addReactionIcon', url: URL_ADDREACTION }, ...properties);
}

/**
 * Creates an add reaction icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addReactionIcon = (...properties) => {
    const element = document.createElement('div');
    initAddReactionIcon(element, ...properties);
    return element;
}
