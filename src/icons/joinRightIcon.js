import { initIcon } from "./icon.js";

//the url of the join right svg; resolved relative to this module
const URL_JOINRIGHT = new URL('../../assets/icons/joinRight.svg', import.meta.url).href;

/**
 * Initializes an icon element as a join right icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/joinRight.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initJoinRightIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'joinRightIcon', url: URL_JOINRIGHT }, ...properties);
}

/**
 * Creates a join right icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const joinRightIcon = (...properties) => {
    const element = document.createElement('div');
    initJoinRightIcon(element, ...properties);
    return element;
}
