import { initIcon } from "./icon.js";

//the url of the move to inbox outlined svg; resolved relative to this module
const URL_MOVETOINBOXOUTLINED = new URL('../../assets/icons/moveToInboxOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a move to inbox outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moveToInboxOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoveToInboxOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'moveToInboxOutlinedIcon', url: URL_MOVETOINBOXOUTLINED }, ...properties);
}

/**
 * Creates a move to inbox outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moveToInboxOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMoveToInboxOutlinedIcon(element, ...properties);
    return element;
}
