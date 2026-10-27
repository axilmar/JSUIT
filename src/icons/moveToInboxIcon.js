import { initIcon } from "./icon.js";

//the url of the move to inbox svg; resolved relative to this module
const URL_MOVETOINBOX = new URL('../../assets/icons/moveToInbox.svg', import.meta.url).href;

/**
 * Initializes an icon element as a move to inbox icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moveToInbox.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoveToInboxIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'moveToInboxIcon', url: URL_MOVETOINBOX }, ...properties);
}

/**
 * Creates a move to inbox icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moveToInboxIcon = (...properties) => {
    const element = document.createElement('div');
    initMoveToInboxIcon(element, ...properties);
    return element;
}
