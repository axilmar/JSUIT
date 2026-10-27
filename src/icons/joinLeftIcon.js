import { initIcon } from "./icon.js";

//the url of the join left svg; resolved relative to this module
const URL_JOINLEFT = new URL('../../assets/icons/joinLeft.svg', import.meta.url).href;

/**
 * Initializes an icon element as a join left icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/joinLeft.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initJoinLeftIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'joinLeftIcon', url: URL_JOINLEFT }, ...properties);
}

/**
 * Creates a join left icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const joinLeftIcon = (...properties) => {
    const element = document.createElement('div');
    initJoinLeftIcon(element, ...properties);
    return element;
}
